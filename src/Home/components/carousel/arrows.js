let Arrows = (props)=>{
    return (
        <div>
            <a className={`carousel-control-${props.dir}`} href={`#${props.id}`} role="button" data-slide={props.dir}>
                <span className={`carousel-control-${props.dir}-icon carouselCtrlIcon ${props.dir}CarCtrl icc`} aria-hidden="true"></span>
                <span className="sr-only">{props.dir}</span>
            </a>
        </div>
    )
}
export default Arrows;