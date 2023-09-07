import VueEasyToc from './components/VueEasyToc.vue';
import {generateId} from "./utils";

export default {
  install(Vue) {
    Vue.directive('toc', {
      bind(element, binding) {
        const contentSelector = binding.value.content || 'body';
        const headingSelectors = (binding.value.heading || 'h1,h2,h3,h4,h5,h6').split(',');

        const headings = document.querySelectorAll(`${contentSelector} ${headingSelectors.join(',')}`);

        // Initialize an empty stack for maintaining the current level of headings
        const stack = [];

        headings.forEach(heading => {
          const level = parseInt(heading.tagName[1]);
          const id = heading.getAttribute('id') || generateId(heading.textContent);
          heading.setAttribute('id', id);
          const listItem = document.createElement('li');
          const link = document.createElement('a');
          link.href = `#${id}`;
          link.textContent = heading.textContent.trim();
          listItem.appendChild(link);

          // Determine the parent UL element for this heading based on its level
          while (stack.length > 0 && stack[stack.length - 1].level >= level) {
            stack.pop();
          }

          if (stack.length === 0) {
            // If the stack is empty, append the listItem directly to the root element
            element.appendChild(listItem);
          } else {
            // Otherwise, append the listItem to the last UL element in the stack
            stack[stack.length - 1].ul.appendChild(listItem);
          }

          // Push the current heading and UL element to the stack
          stack.push({level, ul: listItem.appendChild(document.createElement('ul'))});
        });
      }
    });
    Vue.component('VueEasyToc', VueEasyToc);
  },
};
