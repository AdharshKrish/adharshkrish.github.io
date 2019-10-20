    // window.onresize = function(){
    //     document.getElementById('dept-image').style.height=screen.height+"px";
    //     document.getElementById('dept-image').style.width=screen.width+"px";
    // }
    // document.getElementById('dept-image').style.height=screen.height+"px";
    // document.getElementById('dept-image').style.width=screen.width+"px";
        // if(screen.width>600)
        //     document.getElementById('dept-image').style.width=screen.width*93/100;
        // else
            // document.getElementById('dept-image').style.width=screen.width;

            // document.getElementById('dept-image').style.height="650px";

            // if(screen.width>600)
            //     document.getElementById('dept-image').style.width="93%";
            // else
            //     document.getElementById('dept-image').style.width="100%";

    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = "";
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    date=months[d.getMonth()]+" "+d.getDate()+" "+d.getFullYear()+" | "+strTime;
    document.getElementById('date').innerHTML=date;

    window.addEventListener('scroll',function()
    {
       if(document.documentElement.scrollTop == 0){

        if(screen.width<530)
            document.getElementById('dept-name').style.transform="matrix(1, 0, 0, 1, 0,300)";
        else if(screen.width<786)
            document.getElementById('dept-name').style.transform="matrix(1.2, 0, 0, 1.2, 0,300)";
        else if(screen.width<1000)
            document.getElementById('dept-name').style.transform="matrix(1.5, 0, 0, 1.5, 0,300)";
        else if(screen.width<1300)
            document.getElementById('dept-name').style.transform="matrix(1.6, 0, 0, 1.6, 100,300)";
        else
            document.getElementById('dept-name').style.transform="matrix(1.8, 0, 0, 1.8, 300,300)";

        document.getElementById('dept-name').style.color="white";

        document.getElementById('dept-image').style.outline="none";
        document.getElementById('dept-image').style.position="absolute";
        document.getElementById('dept-image').style.transform="scale(1,1)";
        // document.getElementById('dept-image').style.height=screen.height+"px";
        // document.getElementById('dept-image').style.width=screen.width+"px";
        document.getElementById('dept-image').style.zIndex="10";
        document.getElementById('dept-image').style.transform="matrix(1.07, 0, 0, 1.4, 0,0)";
       }
       else{
        document.getElementById('dept-name').style.transform="translateY(0%)";
        document.getElementById('dept-name').style.color="black";
        // document.getElementById('dept-name').style.position="relative";
        // document.getElementById('dept-name').style.left="0";

        document.getElementById('dept-image').style.outline="3px solid white";
        if(screen.width>600)
            document.getElementById('dept-image').style.outlineOffset="-30px";
        else
            document.getElementById('dept-image').style.outlineOffset="-15px";

        document.getElementById('dept-image').style.position="static";
        document.getElementById('dept-image').style.transform="scale(1,1)";
        document.getElementById('dept-image').style.height="650px";

        // document.getElementById('dept-image').style.height=screen.height+"px";

        if(screen.width>600)
            document.getElementById('dept-image').style.width="93%";
        else
            document.getElementById('dept-image').style.width="100%";

        document.getElementById('dept-image').style.zIndex="-1";
       }
    });