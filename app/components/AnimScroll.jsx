'use client'

import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const AnimScroll = () => {

  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress)
  return (
    <>
    <div className='mt-64'>

      <motion.div
      style={{
      // scaleX: scrollYProgress,
      scaleX,
      background: 'red',
      transformOrigin: 'left',
      position: 'sticky',
      top: '0',
      width: '100%',
      height: '20px'
     }}
      />


        <div 
        className='max-w-3xl m-auto p-5 mt-24'>
            <p>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Itaque nobis rerum praesentium placeat. Quia, quos omnis libero, saepe error numquam voluptates non 
                rem obcaecati quam molestias facilis, perferendis ab cumque! Ea, totam quidem nisi et est temporibus adipisci culpa illum provident omnis vel tenetur minima vitae velit cum id minus, 
                repellendus dicta, blanditiis eveniet ut. Dicta eaque illo aspernatur. Magni, ratione qui vero, illo neque facere tenetur, quo officia libero perspiciatis rerum consectetur maxime exercitationem voluptates a.
                Placeat, voluptate, cumque in consequatur rerum facilis 
                nam perferendis accusamus hic, quisquam magni aut eius quas iste? Error eum maiores praesentium ipsa excepturi!
            </p>
            <p>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Itaque nobis rerum praesentium placeat. Quia, quos omnis libero, saepe error numquam voluptates non 
                rem obcaecati quam molestias facilis, perferendis ab cumque! Ea, totam quidem nisi et est temporibus adipisci culpa illum provident omnis vel tenetur minima vitae velit cum id minus, 
                repellendus dicta, blanditiis eveniet ut. Dicta eaque illo aspernatur. Magni, ratione qui vero, illo neque facere tenetur, quo officia libero perspiciatis rerum consectetur maxime exercitationem voluptates a.
                Placeat, voluptate, cumque in consequatur rerum facilis 
                nam perferendis accusamus hic, quisquam magni aut eius quas iste? Error eum maiores praesentium ipsa excepturi!
            </p>
            <p>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Itaque nobis rerum praesentium placeat. Quia, quos omnis libero, saepe error numquam voluptates non 
                rem obcaecati quam molestias facilis, perferendis ab cumque! Ea, totam quidem nisi et est temporibus adipisci culpa illum provident omnis vel tenetur minima vitae velit cum id minus, 
                repellendus dicta, blanditiis eveniet ut. Dicta eaque illo aspernatur. Magni, ratione qui vero, illo neque facere tenetur, quo officia libero perspiciatis rerum consectetur maxime exercitationem voluptates a.
                Placeat, voluptate, cumque in consequatur rerum facilis 
                nam perferendis accusamus hic, quisquam magni aut eius quas iste? Error eum maiores praesentium ipsa excepturi!
            </p>
            <p>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Itaque nobis rerum praesentium placeat. Quia, quos omnis libero, saepe error numquam voluptates non 
                rem obcaecati quam molestias facilis, perferendis ab cumque! Ea, totam quidem nisi et est temporibus adipisci culpa illum provident omnis vel tenetur minima vitae velit cum id minus, 
                repellendus dicta, blanditiis eveniet ut. Dicta eaque illo aspernatur. Magni, ratione qui vero, illo neque facere tenetur, quo officia libero perspiciatis rerum consectetur maxime exercitationem voluptates a.
                Placeat, voluptate, cumque in consequatur rerum facilis 
                nam perferendis accusamus hic, quisquam magni aut eius quas iste? Error eum maiores praesentium ipsa excepturi!
            </p>
            <p>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Itaque nobis rerum praesentium placeat. Quia, quos omnis libero, saepe error numquam voluptates non 
                rem obcaecati quam molestias facilis, perferendis ab cumque! Ea, totam quidem nisi et est temporibus adipisci culpa illum provident omnis vel tenetur minima vitae velit cum id minus, 
                repellendus dicta, blanditiis eveniet ut. Dicta eaque illo aspernatur. Magni, ratione qui vero, illo neque facere tenetur, quo officia libero perspiciatis rerum consectetur maxime exercitationem voluptates a.
                Placeat, voluptate, cumque in consequatur rerum facilis 
                nam perferendis accusamus hic, quisquam magni aut eius quas iste? Error eum maiores praesentium ipsa excepturi!
            </p>
            <p>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Itaque nobis rerum praesentium placeat. Quia, quos omnis libero, saepe error numquam voluptates non 
                rem obcaecati quam molestias facilis, perferendis ab cumque! Ea, totam quidem nisi et est temporibus adipisci culpa illum provident omnis vel tenetur minima vitae velit cum id minus, 
                repellendus dicta, blanditiis eveniet ut. Dicta eaque illo aspernatur. Magni, ratione qui vero, illo neque facere tenetur, quo officia libero perspiciatis rerum consectetur maxime exercitationem voluptates a.
                Placeat, voluptate, cumque in consequatur rerum facilis 
                nam perferendis accusamus hic, quisquam magni aut eius quas iste? Error eum maiores praesentium ipsa excepturi!
            </p>
            <p>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Itaque nobis rerum praesentium placeat. Quia, quos omnis libero, saepe error numquam voluptates non 
                rem obcaecati quam molestias facilis, perferendis ab cumque! Ea, totam quidem nisi et est temporibus adipisci culpa illum provident omnis vel tenetur minima vitae velit cum id minus, 
                repellendus dicta, blanditiis eveniet ut. Dicta eaque illo aspernatur. Magni, ratione qui vero, illo neque facere tenetur, quo officia libero perspiciatis rerum consectetur maxime exercitationem voluptates a.
                Placeat, voluptate, cumque in consequatur rerum facilis 
                nam perferendis accusamus hic, quisquam magni aut eius quas iste? Error eum maiores praesentium ipsa excepturi!
            </p>
        </div>
    </div>
    </>
  )
}

export default AnimScroll