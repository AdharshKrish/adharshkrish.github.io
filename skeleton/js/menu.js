// let c = document.getElementById('menu-col-2').getElementsByTagName('ul');
// for(var i = 0; i < c.length; i++) {
//     console.log(c[i]);
// }

function menu(item)
{
    document.getElementById('menu-col-3').classList.replace('col-lg-6','col-lg-3');
    document.getElementById('menu-col-3').classList.replace('col-lg-2','col-lg-3');
    document.getElementById('menu-col-4').classList.replace('col-lg-4','col-lg-3');
    document.getElementById('menu-col-3').style.borderRight='none';
    // for(let i=0;i<6;i++){
    //     document.getElementById('menu-col-2').classList.replace('col-lg-3','col-lg-2');
    // }

    if(item==='gallery'){
        document.getElementById('menu-col-3').innerHTML='<img src="gallery-1.jpg" alt="gallery-1">';
        document.getElementById('menu-col-4').innerHTML='<img src="gallery-2.jpg" alt="gallery-2">';
    }
    else if(item==='oncampus'){
        document.getElementById('menu-col-3').classList.replace('col-lg-3','col-lg-2');
        document.getElementById('menu-col-4').classList.replace('col-lg-3','col-lg-4');
        document.getElementById('menu-col-3').style.borderRight='1px solid #707070';
        document.getElementById('menu-col-3').innerHTML='<ul><li>Campus&nbsp;Life</li><li onmouseover="menu1(1)">Committees<i class="material-icons" style="font-size:15px;margin-top:12px;float:right">navigate_next</i></li><li onmouseover="menu1(2)">Cells<i class="material-icons" style="font-size:15px;margin-top:12px;float:right">navigate_next</i></li><li onmouseover="menu1(3)">Clubs<i class="material-icons" style="font-size:15px;margin-top:12px;float:right">navigate_next</i></li><li onmouseover="menu1(4)">Chapters<i class="material-icons" style="font-size:15px;margin-top:12px;float:right">navigate_next</i></li><li>Facilities</li></ul>';
        document.getElementById('menu-col-4').innerHTML='';
    }
    else if(item==='departments'){
        document.getElementById('menu-col-3').classList.replace('col-lg-3','col-lg-6');
        document.getElementById('menu-col-3').innerHTML='<ul><li>Chemical Engineering</li><li>Chemistry</li><li>Civil Engineering</li><li>Computer Science and Engineering</li><li>Electronics and Communication Engineering</li><li>Electronics and Instrumentation Engineering</li><li>Humanities and Social Sciences</li><li>Information Technology</li><li>Mathematics</li><li>Mechanical Engineering</li><li>Physics</li></ul>';
        document.getElementById('menu-col-4').innerHTML='';
    }
    else{
        document.getElementById('menu-col-3').innerHTML='<p style="font-size:18px;line-height:1.5">Pondicherry Engineering College (PEC) is an Institution sponsored by the Union Territory of Pondicherry, India. The College was started in 1984 under the VII Five Year Plan. It is an autonomous Institution for the purposes of administration, staff recruitment and College development and is managed by a Board of Governors.</p>';
        document.getElementById('menu-col-4').innerHTML='<img src="college-img.jpg" alt="college-img">';
    }
}
function menu1(i){
    if(i==1){
        document.getElementById('menu-col-4').innerHTML='<ul><li>Alumni Association</li><li>Examination Wing</li><li>Internal Complaints Committee</li><li>National Cadet Corps</li><li>National Service Scheme</li><li>Students’ Council</li><li>Students’ Disciplinary Committee</li></ul>';
    }else if(i==2){
        document.getElementById('menu-col-4').innerHTML='<ul><li>Center for Continuing Education</li><li>Counselling and Career Guidance Cell</li><li>Grievance Redressal Cell</li><li>Innovation and Entrepreneurship Development Cell</li><li>Internal Quality Assurance Cell</li><li>IP Rights and Patenting Cell</li><li>SC/ST Cell</li><li>Womens’ Cell</li></ul>';
    }else if(i==3){
        document.getElementById('menu-col-4').innerHTML='<ul><li>Cultural Club</li><li>Design Club</li><li>Health, Hygiene and Environmental Club</li><li>Literary Club</li><li>Multimedia Club</li><li>Photography Club</li><li>Rotaract Club</li><li>Tamil Mandram</li></ul>';
    }else if(i==4){
        document.getElementById('menu-col-4').innerHTML='<ul style="font-size:18px"><li>National Programme on Technology Enhanced Learning</li><li>Quality Enhancement in Engineering Education</li><li>Swayam</li></ul>';
    }
}
/*
Cells-
Center for Continuing Education (CCE)
Counselling and Career Guidance Cell (CCGC)
Grievance Redressal Cell
Innovation and Entrepreneurship Development Cell (IEDC)
Internal Quality Assurance Cell (IQAC)
IP Rights and Patenting Cell
SC/ST Cell
Women’s Cell
Clubs-
Cultural Club
Design Club
Health, Hygiene and Environmental Club (H2EC)
Literary Club
Multimedia Club
Photography Club
Rotaract Club
Tamil Literary Club 
Committees-
Alumni Association
Examination Wing
Internal Complaints Committee (Complaints on Sexual Harassment of Women at Workplace)
National Cadet Corps (NCC)
National Service Scheme (NSS)
Students’ Council
Students’ Disciplinary Committee
Chapters-
National Programme on Technology Enhanced Learning (NPTEL)
Quality Enhancement in Engineering Education (QEEE)
Swayam
Academics-
Deans


<ul><li>National Programme on Technology Enhanced Learning</li><li>Quality Enhancement in Engineering Education</li><li>Swayam</li></ul>

*/