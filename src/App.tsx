import {useEffect, useState, useRef, ReactNode, MouseEventHandler, MouseEvent, forwardRef} from 'react';
import './App.scss';
import {Button, Card, CardActions, CardContent, Fade, Link, Tooltip, Typography} from '@mui/material';
import {Telegram, GitHub, LinkedIn} from "@mui/icons-material";

import { Draggable } from "gsap/all";

import gsap from 'gsap';
import {Background} from "./components/Background/Background.tsx";
import {useTextAnimations} from "./utils/animations.ts";

const LoadingDots = () => {

    const [dotsCount, setDotsCount] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDotsCount((prevCount) => (prevCount >= 3 ? 1 : prevCount + 1));
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    const dots = '.'.repeat(dotsCount);

    return <div>{dots}</div>;

};

const IconButton = ({icon, onClick, tooltipTitle}: { icon: ReactNode, tooltipTitle?: string, onClick?: MouseEventHandler<HTMLButtonElement> }) => {

    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const buttonRef = useRef(null);
    const mirrorRef = useRef(null)

    const onClickHandler = (event: MouseEvent<any>) => {

        setIsButtonDisabled(true)

        const tl = gsap.timeline({
            onComplete: () => {
                resetMirrorAnimation();
                setIsButtonDisabled(false)
                onClick && onClick(event);
            },
        });

        tl.to(mirrorRef.current, {scale: 1.6, duration: 1, ease: 'power2.inOut', opacity: 0});

    }

    const resetMirrorAnimation = () => {
        gsap.set(mirrorRef.current, {scale: 1, opacity: 1});
    }

    return (
        <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            arrow
            title={tooltipTitle}
        >
            <div className='icon__button'>

                <button ref={buttonRef} className="icon-button" onClick={!isButtonDisabled ? onClickHandler : undefined}>
                    {icon}
                </button>

                {
                    buttonRef &&
                    <div ref={mirrorRef}>
                        {icon}
                    </div>
                }

            </div>
        </Tooltip>
    );
};

const LinkButton = ({title, href}: {title: string, href: string}) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <Button variant="contained" size='large'> {title} </Button>
    </a>
)

const App = () => {

    const contentTitleRef = useRef(null)
    const [ titleTextTimeline ] = useTextAnimations({
        targetRef: contentTitleRef,
        duration: 4,
        text: 'Askard\'s template...'
    })

    useEffect(() => {
        Draggable.create(".draggable", {type: "x,y"});
    }, []);

    return (
        <div className="App">
            <div className="content">
                <h1 ref={contentTitleRef} className='content__title'></h1>
                <div className="content__anotations">
                    <LinkButton title='Vite' href='https://vitejs.dev/guide/'/>
                    <LinkButton title='React' href='https://legacy.reactjs.org/'/>
                    <LinkButton title='Typescript' href='https://www.typescriptlang.org/'/>
                    <LinkButton title='Material UI' href='https://mui.com/core/'/>
                    <LinkButton title='SASS' href='https://sass-lang.com/'/>
                    <LinkButton title='GSAP' href='https://gsap.com/resources/React/'/>
                    <LinkButton title='ThreeJS Fiber' href='https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'/>
                </div>
                <div className="draggable">
                    <Card>
                        <CardContent sx={{display: 'flex'}}>
                            <div className="card__content">
                                <span> Ready for coding </span>
                                <LoadingDots/>
                            </div>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
                            <IconButton icon={<GitHub/>} tooltipTitle="GitHub"/>
                            <IconButton icon={<Telegram/>} tooltipTitle="Telegram"/>
                            <IconButton icon={<LinkedIn/>} tooltipTitle="LinkedIn"/>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <div className="background">
                <Background/>
            </div>
        </div>
    );
}

export default App;
