import {motion} from 'framer-motion';

export default function IconFerrisWheel() {

    const Icons = [
        "Atom.svg",
        "AWS.svg",
        "Java.svg",
        "C++ (CPlusPlus).svg",
        "Python.svg",
        "HTML5.svg",
        "CSS3.svg",
        "JavaScript.svg",
        "React.svg",
        "Material UI.svg",
        "FileZilla.svg",
        "Git.svg",
        "GitHub.svg",
        "Gitpod.svg",
        "Matplotlib.svg",
        "NumPy.svg",
        "MySQL.svg",
        "NET core.svg",
        "NPM.svg",
        "Postman.svg",
        "Spring.svg",
        "Visual Studio.svg",
        "Visual Studio Code (VS Code).svg"
    ];

    return(
        <div className='IconFerrisWheel'>
            {Icons.map((tech, index)=> {
                return (
                    <motion.div
                        className='ferrisWheel'
                        key={index + 1}
                        initial="initial"
                        animate={["animate", "initialHide"]}
                        variants={{
                            initial:{
                                opacity: 0,
                            },
                            initialHide: {
                                opacity: 1,
                                transition:{
                                    delay: index + 1,
                                },
                            },
                            animate:{
                                rotate: -360,
                                transition: {
                                    duration: Icons.length,
                                    repeat: Infinity,
                                    delay: index + 1,
                                    ease: "linear",
                                },
                            },
                        }}
                        >
                            <div className="imageParent">
                                <img
                                    className='icon'
                                    src={require(`../icons/${tech}`)}
                                    alt={tech}
                                />
                            </div>
                        </motion.div>
                );
            }, [])}
        </div>
    );
}