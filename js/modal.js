      //Client Onboard modal modal

      $(document).ready(function(){
        var url = "modalhtml/clientOnboard.html";
        jQuery('#client-Onboard').on("click",function(e) {
        
            $('.modal-container').load(url,function(result){
            
                $('#clientOnboardid').modal({show:true});
            });
        
        });
    });

    //task modal

    $(document).ready(function(){
            var url = "modalhtml/taskModal.html";
            jQuery('#task-Modal').on("click",function(e) {
            
                $('.modal-container').load(url,function(result){
                
                    $('#taskModalid').modal({show:true});
                });
            
});
});

  //department modal

  $(document).ready(function(){
    var url = "modalhtml/departmentModal.html";
    jQuery('#department-Modal').on("click",function(e) {
    
        $('.modal-container').load(url,function(result){
        
            $('#departmentModalid').modal({show:true});
        });
    
});
});

//team modal

$(document).ready(function(){
    var url = "modalhtml/teamModal.html";
    jQuery('#team-Modal').on("click",function(e) {
    
        $('.modal-container').load(url,function(result){
        
            $('#teamModalid').modal({show:true});
        });
    
});
});

//users modal

$(document).ready(function(){
    var url = "modalhtml/usersModal.html";
    jQuery('#users-Modal').on("click",function(e) {
    
        $('.modal-container').load(url,function(result){
        
            $('#usersModalid').modal({show:true});
        });
    
});
});

//report modal

$(document).ready(function(){
    var url = "modalhtml/reportModal.html";
    jQuery('#report-Modal').on("click",function(e) {
    
        $('.modal-container').load(url,function(result){
        
            $('#reportModalid').modal({show:true});
        });
    
});
});

//client modal

$(document).ready(function(){
    var url = "modalhtml/clientModal.html";
    jQuery('#client-Modal').on("click",function(e) {
    
        $('.modal-container').load(url,function(result){
        
            $('#clientModalid').modal({show:true});
        });
    
});
});

//support modal

$(document).ready(function(){
    var url = "modalhtml/supportModal.html";
    jQuery('#support-Modal').on("click",function(e) {
    
        $('.modal-container').load(url,function(result){
        
            $('#supportModalid').modal({show:true});
        });
    
});
});

//repository modal

$(document).ready(function(){
    var url = "modalhtml/repositoryModal.html";
    jQuery('#repository-Modal').on("click",function(e) {
    
        $('.modal-container').load(url,function(result){
        
            $('#repositoryModalid').modal({show:true});
        });
    
});
});