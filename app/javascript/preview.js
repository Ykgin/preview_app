document.addEventListener('DOMContentLoaded', function(){
  const postForm = document.getElementById('new_post');
  const previewList = document.getElementById('previews');
  if (!postForm)return null;
  console.log("previewが読み込まれました");

  const fileField = document.querySelector('input[type="file"][name="post[image]"]');
  fileField.addEventListener('change', function(e){
    console.log("input要素での値の変化が起きました");
  })
});