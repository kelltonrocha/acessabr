import React, {useState, useEffect, useContext} from "react";
import { FilterContext } from "../../contexts/FilterContext";
import Card from '../Card';
import SwiperCore, {Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import api from "../../config/api";

SwiperCore.use(Pagination);

function Slider() {
    const {filteredPlace, setFilteredPlace} = useContext(FilterContext)
    const [places, setPlaces] = useState([])

    useEffect(() => {
        const fetchPlaces = async () => { //resposta assincrona pois não se sabe qd o resultado é retornado
            const result = await api.get(`/places?category_like=${filteredPlace}`)   //await: boa prática com async.

            if(result.status==200) { //código padrão http requisição success
                setPlaces(result.data)
            }            
        }
        fetchPlaces()
    }, [filteredPlace])

    return( 
        <Swiper 
            breakpoints={{      // qtd de cards por vez de acordo com a resolução
                300: {
                    slidesPerView: 1
                },          
                767: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 4
                }
            }}
        >
           {
               places.map(item => (
                    <SwiperSlide key={item.id}>
                        <Card key={item.id} item={item} />
                    </SwiperSlide>
               ))               
            }
        </Swiper>
    )
}

export default Slider;