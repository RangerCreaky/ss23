import React from 'react';

const SlideTrack = ({ forward = false }) => {
    const images = [
        "../../../images/hero/img1.png",
        "../../../images/hero/img2.png",
        "../../../images/hero/img3.png",
        // "../../../images/hero/img4.png",
        // "../../../images/hero/img5.png",
        // "../../../images/hero/img6.png",

        // "public/images/hero/img7.png",
        // "public/images/hero/img8.png",
    ]

    const val = forward ? 'marquee-forward' : 'marquee-backward';

    return (
        <div className="hero">
            <div class="marquee flex-col h-screen overflow-hidden">
                <div className={`marquee-group ${val} shrink-0 flex-col justify-around items-around whitespace-nowrap h-full`}>
                    {
                        images.map(image => {
                            return (
                                <div className="m-2 image_wrapper grid w-64">
                                    <img className="object-contain rounded-lg w-64 h-64 aspect-video" src={image} alt="banner" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`marquee-group ${val} shrink-0 flex-col justify-around items-around whitespace-nowrap h-full`}>
                    {
                        images.map(image => {
                            return (
                                <div className="m-2 image_wrapper grid w-64">
                                    <img className="object-contain w-64 h-64 rounded-lg aspect-video" src={image} alt="banner" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SlideTrack;