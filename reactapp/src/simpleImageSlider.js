import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './simpleImageSlider';
function simpleImageSlider() {
   const sliderImages = [
      {
         url: "https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
         url: "https://cdn.pixabay.com/photo/2023/05/31/11/15/fish-8031138_640.jpg",
      },
      {
         url: "https://cdn.pixabay.com/photo/2018/03/28/20/32/food-3270461_1280.jpg",
      },
      {
         url: "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
         url: "https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?size=626&ext=jpg&ga=GA1.1.1695929741.1689913059&semt=ais",
      },
      {
         url: "https://img.freepik.com/free-photo/chopping-board-surrounded-with-vegetables-eggs-rice-grains-desk_23-2148062361.jpg?size=626&ext=jpg&ga=GA1.1.1695929741.1689913059&semt=ais",
      },
      {
         url: "https://img.freepik.com/free-photo/indian-condiments-with-copy-space-view_23-2148723492.jpg?w=1380&t=st=1690038415~exp=1690039015~hmac=b3e4d352ba3cda13effa2cc20261f90fb04d0881ed7fd7edf67d034472f4dc67",
      },
   ];
   return (
      <div>
         
         <SimpleImageSlider style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'}}
            width={1000}
            height={500}
            images={sliderImages}
            showNavs={true}
         />
      </div>
   );
}
export default simpleImageSlider;