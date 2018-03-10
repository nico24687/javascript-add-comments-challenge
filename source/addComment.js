$(document).ready(function(){
  $('#new_comment_button').click(() => {
    $("#new_comment_button").hide()
    $("#comments").append("<form id='new_comment'></form>")
    $("#new_comment").show()
    $("#new_comment").append('<textarea name="comment" placeholder="Post content">')
      .append('<input type="text" name="authorName" placeholder="Author name">')
      .append('<input type="submit" id="submit_comment">')

    $("#new_comment").submit( () => {
      const comment = $("textarea[name=comment]").val()
      const name = $("input[name=authorName]").val()
      if(comment.length === 0){
        alert("You must provide a comment")
      } else {
        $("#new_comment_button").show()
        $("#comment_list").append("<li>" + comment + "<span class='author'>" + name + "</span></li>")
        $("#new_comment").remove()
        event.preventDefault();
      }
    })
  })
})
