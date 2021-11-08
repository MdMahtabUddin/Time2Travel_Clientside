import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const PhotoGallery = () => {

    const images = [
        {
            original: 'https://i.ibb.co/FB2Tsqq/g112.jpg',
            thumbnail: 'https://i.ibb.co/FB2Tsqq/g112.jpg',
        },
        {
            original: 'https://i.ibb.co/F318fYJ/g211.jpg',
            thumbnail: 'https://i.ibb.co/F318fYJ/g211.jpg',
        },
        {
            original: 'https://i.ibb.co/zJbwwVK/g311.jpg',
            thumbnail: 'https://i.ibb.co/zJbwwVK/g311.jpg',
        },
        {
            original: 'https://i.ibb.co/2d0rNb4/g321.jpg',
            thumbnail: 'https://i.ibb.co/2d0rNb4/g321.jpg',
        },
        {
            original: 'https://i.ibb.co/N1cw35W/g411.jpg',
            thumbnail: 'https://i.ibb.co/N1cw35W/g411.jpg',
        },
        {
            original: 'https://i.ibb.co/MPjrMxP/g511.jpg',
            thumbnail: 'https://i.ibb.co/MPjrMxP/g511.jpg',
        },
        {
            original: 'https://i.ibb.co/kyv1np5/g811.jpg',
            thumbnail: 'https://i.ibb.co/kyv1np5/g811.jpg',
        },
        {
            original: 'https://i.ibb.co/nBPBrg0/g711.jpg',
            thumbnail: 'https://i.ibb.co/nBPBrg0/g711.jpg',
        },
        {
            original: 'https://i.ibb.co/dD8ynt2/g611.jpg',
            thumbnail: 'https://i.ibb.co/dD8ynt2/g611.jpg',
        },
        {
            original: 'https://i.ibb.co/MPjrMxP/g511.jpg',
            thumbnail: 'https://i.ibb.co/MPjrMxP/g511.jpg',
        },
        {
            original: 'https://i.ibb.co/N1cw35W/g411.jpg',
            thumbnail: 'https://i.ibb.co/N1cw35W/g411.jpg',
        },
        {
            original: 'https://i.ibb.co/2d0rNb4/g321.jpg',
            thumbnail: 'https://i.ibb.co/2d0rNb4/g321.jpg',
        },
        {
            original: 'https://i.ibb.co/zJbwwVK/g311.jpg',
            thumbnail: 'https://i.ibb.co/zJbwwVK/g311.jpg',
        },
        {
            original: 'https://i.ibb.co/wRZvqQv/g221.jpg',
            thumbnail: 'https://i.ibb.co/wRZvqQv/g221.jpg',
        },
        {
            original: 'https://i.ibb.co/F318fYJ/g211.jpg',
            thumbnail: 'https://i.ibb.co/F318fYJ/g211.jpg',
        },


        {
            original: 'https://i.ibb.co/Lk05vZc/g162.jpg',
            thumbnail: 'https://i.ibb.co/Lk05vZc/g162.jpg',
        },
        {
            original: 'https://i.ibb.co/tH5DMkD/g152.jpg',
            thumbnail: 'https://i.ibb.co/tH5DMkD/g152.jpg',
        },
        {
            original: 'https://i.ibb.co/H2Vb5Wv/g142.jpg',
            thumbnail: 'https://i.ibb.co/H2Vb5Wv/g142.jpg',
        },
        {
            original: 'https://i.ibb.co/WGFbxCq/g132.jpg',
            thumbnail: 'https://i.ibb.co/WGFbxCq/g132.jpg',
        },
        {
            original: 'https://i.ibb.co/vXb4pzZ/g122.jpg',
            thumbnail: 'https://i.ibb.co/vXb4pzZ/g122.jpg',
        },
        {
            original: 'https://i.ibb.co/rw3BzWf/g113.jpg',
            thumbnail: 'https://i.ibb.co/rw3BzWf/g113.jpg',
        },
        {
            original: 'https://i.ibb.co/FB2Tsqq/g112.jpg',
            thumbnail: 'https://i.ibb.co/FB2Tsqq/g112.jpg',
        },
        {
            original: 'https://i.ibb.co/mtJG3jz/g102.jpg',
            thumbnail: 'https://i.ibb.co/mtJG3jz/g102.jpg',
        },
        {
            original: 'https://i.ibb.co/xJYCtxn/g93.jpg',
            thumbnail: 'https://i.ibb.co/xJYCtxn/g93.jpg',
        },
    ];


    return (
        <div className="container my-5" id="photoGallery">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <h3 className="text-center">Photo Gallery</h3>
                <ImageGallery items={images} />
            </div>
        </div>
    );
};

export default PhotoGallery;