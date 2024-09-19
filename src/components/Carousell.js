import React from 'react';

import { Carousel } from 'antd';

const contentStyle = {
   
 width:"100%",
 height:"100%",
opacity:"0.7",


  backgroundSize:"cover",
};


  


export function Carousell() {
    return (
  <Carousel autoplay autoplaySpeed={2000} fade	>
    <div>
    <img src="https://media.istockphoto.com/id/1342226850/photo/woman-checking-her-montly-expenses-while-having-coffee-break.jpg?s=612x612&w=0&k=20&c=XTLjsY7O4Kf4y5gne0rOqdlPUWWng2QDISWd2AofooU=" alt="React Image" style={contentStyle} />
    </div> 
    <div>
    <img src="https://www.freshbooks.com/wp-content/uploads/2022/02/expense-tracking.jpg" alt="React Image" style={contentStyle} />
    </div> 
    <div>
    <img src="https://geekflare.com/cdn-cgi/image/width=1200,height=630,fit=crop,quality=90,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2023/05/expense-tracking-software.jpg" alt="React Image" style={contentStyle} />
    </div> 
    <div>
    <img src="https://img.freepik.com/premium-photo/items-doing-business-bright-colored-background_200402-13828.jpg?w=740" alt="React Image" style={contentStyle} />
    </div> 
    <div>
    <img src="https://www.orangemantra.com/blog/wp-content/uploads/2021/08/expense-tracking-app.png" alt="React Image" style={contentStyle} />
    </div> 
   
  </Carousel>
    );
}

