function show_alert(title = "", content = "", positive_btn = "", negative_btn = "", natural_btn = "", callback) {
          var str = "<div class='custom-modal-main active' id='custom-alert'>" 
           + "<div class='custom-modal' role='document'>"
                           + "<div class='model-header'>"
                                    + "<input type='hidden' name='iDriverId_temp' id='iDriverId_temp'>"
                                       + "<h4 class='modal-title' id='inactiveModalLabel'>"+ title +"</h4>"
                                        + "<i class='icon-close' data-dismiss='modal'></i>"
                              +"</div>"
                              +"<div class='model-body'>"+ content +"</div>"
                              +"<div class='model-footer button-block'>";
                              if(negative_btn!="") {
                               str = str + "<button type='button' class='btn gen-btn cancel' onclick='handle_click(1, "+callback + ")' data-dismiss='modal'>"+ negative_btn +"</button>";
                              }
                              if(positive_btn!="") {
                              str = str + "<button type='button' class='btn btn-success gen-btn' onclick='handle_click(0, "+callback + ")' data-dismiss='modal'>"+ positive_btn +"</button>";
                              }
                              if(natural_btn!="") {
                              str = str + "<button type='button' class='btn btn-success gen-btn' onclick='handle_click(2, "+callback + ")' data-dismiss='modal'>"+ natural_btn +"</button>";      
                              }
                              str = str + "</div>"
                    + "</div>"
                    + "</div>";
          if($("#custom-alert").length > 0 ){
                    $('body').find('#custom-alert').remove();
                    $('body').append(str);
          } else {
                    $('body').append(str);
          }
}

function handle_click(btn_id, callback) {
           callback(btn_id);
}