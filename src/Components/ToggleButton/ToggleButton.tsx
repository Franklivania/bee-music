import './ToggleButton.scss'

type ToggleTypes = {
    title: string
    children: any
    icon: string
    className: string
    onMouseEnter: any
    onMouseLeave: any
    isActive: any
    onClick: any
}

export default function ToggleButton({title, children, icon, className, onMouseEnter, onMouseLeave, isActive, onClick}: ToggleTypes) {
    return(
        <button 
            type="button" 
            className={`${className} ${isActive ? 'active' : ''}`} 
            id='t-btn' 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            
            <p className={`${className} ${isActive ? 'active' : ''}`}>
                <i className={icon}></i>
                {title}
            </p>

            {children}
        </button>
    )
}