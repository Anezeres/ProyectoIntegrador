import { Center, Html, Text3D, useGLTF } from "@react-three/drei";
import { useContext, useRef } from "react";


const TextoEscoger = () => {

    


    return(
        <>
           <Center>
                <Html
                    position={[-3,2,4]}
                    center
                    distanceFactor={12}
                    visible={false}



                >
                    <h2 className="song-text">Volver a casa</h2>
                </Html>

            </Center>

            <Center>
                <Html
                    position={[10, 1.8, 5]}
                    center
                    distanceFactor={12}
                    visible={false}



                >
                    <h2 className="song-text">Viajar al Mundo Virtual</h2>
                </Html>

            </Center>
        </>

   

    );

    
}

export default TextoEscoger;