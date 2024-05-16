import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { LightGallery as ILightGallery, } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import Image from 'next/image';
import { useContext } from 'react';
import { MyContext } from '@/context/MyContext';
import { TstateCarSelected } from './Types';

function Carousel2() {
    const {CarSelected } = useContext(MyContext) as  TstateCarSelected  
    const lightGalleryRef = useRef<any>(null);
    const containerRef = useRef(null);
    const [galleryContainer, setGalleryContainer] = useState<any>(null);

    const onInit = useCallback((detail:any) => {
        if (detail) {
            lightGalleryRef.current = detail.instance;
            lightGalleryRef.current.openGallery();
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            setGalleryContainer(containerRef.current);
        }
    }, []);


return (<div className="App">
        <div style={{ height: '800px' }} ref={containerRef}></div>
        <LightGallery
            container={galleryContainer}
            onInit={onInit}
            plugins={[lgZoom, lgThumbnail]}
            dynamic={true}
            dynamicEl={[
                {
                    src:CarSelected.imgFront,
                    responsive: '...',
                    thumb: '...',
                    subHtml: `...`,
                },
                {
                    src:CarSelected.imgBack,
                    responsive: '...',
                    thumb: '...',
                    subHtml: `...`,
                },
            ]}
        />
    </div>
    )
}

export default Carousel2