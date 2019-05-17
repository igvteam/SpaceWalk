import * as THREE from "../node_modules/three/build/three.module.js";

class CubicMapManager {

    constructor ({ textureRoot, suffix, vertexShaderName, fragmentShaderName, isSpecularMap }) {

        // const paths = pathsPosNegStyleWithRoot(textureRoot, suffix);
        const paths = pathsOpenEXRStyleWithRoot(textureRoot, suffix);

        const textureLoader = new THREE.CubeTextureLoader();

        const onLoad = (cubicTexture) => {

            cubicTexture.format   = THREE.RGBFormat;
            cubicTexture.mapping  = THREE.CubeReflectionMapping;
            cubicTexture.encoding = THREE.sRGBEncoding;

            this.cubicTexture = cubicTexture;

            this.material = isSpecularMap ? specularMaterial(cubicTexture) : diffuseMaterial(cubicTexture, vertexShaderName, fragmentShaderName);
            this.material.side = THREE.DoubleSide;
        };

        const onProgress = () => { };

        const onError = (error) => {
            console.log(error.message)
        };

        textureLoader.load( paths, onLoad, onProgress, onError );

    }

}

function diffuseMaterial (cubicTexture, vertID, fragID) {

    const config =
        {
            uniforms:
                {
                    cubicMap:
                        {
                            value: cubicTexture
                        }
                },

              vertexShader: document.getElementById( vertID ).textContent,
            fragmentShader: document.getElementById( fragID ).textContent
        };

    return new THREE.ShaderMaterial( config );

}

function specularMaterial (cubicTexture) {

    let { uniforms, vertexShader, fragmentShader } = THREE.ShaderLib.cube;
    uniforms.tCube.value = cubicTexture;

    return new THREE.ShaderMaterial( { uniforms, vertexShader, fragmentShader, depthWrite:false, side:THREE.BackSide } );
}

function pathsPosNegStyleWithRoot(root, suffix) {

    const posneg = [ 'pos', 'neg' ];
    const axes = [ 'x', 'y', 'z' ];

    let names = [];
    axes.forEach((axis) => { names.push((posneg[ 0 ] + axis)); names.push(posneg[ 1 ] + axis); });

    const paths = names.map((name) => { return root + name + suffix });

    return paths;

}

function pathsOpenEXRStyleWithRoot(root, suffix) {

    let pieces = root.split('/').filter((piece) => { return "" !== piece && '..' !== piece });
    let prefix = pieces.pop();
    if ('' === prefix) {
        prefix = pieces.pop();
    }
    const posneg = [ '+', '-' ];
    const axes = [ 'X', 'Y', 'Z' ];

    let names = [];
    axes.forEach((axis) => { names.push((prefix + posneg[ 0 ] + axis)); names.push(prefix + posneg[ 1 ] + axis); });

    const paths = names.map((name) => { return root + name + suffix });

    return paths;

}

export default CubicMapManager;
