export const generateId = (content) => {
  let id = content.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
  id = id.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
  id = id.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
  id = id.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
  id = id.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
  id = id.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
  id = id.replace(/đ/gi, 'd');
  id = id.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
    '',
  );
  id = id.replace(/ /gi, '_');
  id = id.replace(/\-\-\-\-\-/gi, '_');
  id = id.replace(/\-\-\-\-/gi, '_');
  id = id.replace(/\-\-\-/gi, '_');
  id = id.replace(/\-\-/gi, '_');
  id = id.replace(/\@\-|\-\@|\@/gi, '');
  return id;
}
