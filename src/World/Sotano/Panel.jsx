import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Panel = (props) => {

    const PanelModel = useGLTF("/assets/Models/Panel/scene.gltf");
    const PanelRef = useRef();
    


    return(
        <mesh ref={PanelRef} position={[-1,1.5,-3]} {...props} scale={1.3} >
            <primitive object={PanelModel.scene}/>
        </mesh>
    );

    
}

export default Panel;