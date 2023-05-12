import "./Checkbox.css"

const Checkbox = () => {
    return ( 
        <label className="input_wrapper">
            <input className="input_checkbox" type="checkbox" />
            <span className="checkbox_text">cqccsvsv</span>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 20.0837V23H11.9163L20.5173 14.399L17.601 11.4827L9 20.0837ZM22.7725 12.1437C23.0758 11.8404 23.0758 11.3505 22.7725 11.0472L20.9528 9.22747C20.6495 8.92418 20.1596 8.92418 19.8563 9.22747L18.4331 10.6506L21.3494 13.5669L22.7725 12.1437V12.1437Z" fill="#747E8A"/>
            </svg>
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.888889 14.2222C0.888889 15.2 1.68889 16 2.66667 16H9.77778C10.7556 16 11.5556 15.2 11.5556 14.2222V3.55556H0.888889V14.2222ZM3.07556 7.89333L4.32889 6.64L6.22222 8.52444L8.10667 6.64L9.36 7.89333L7.47556 9.77778L9.36 11.6622L8.10667 12.9156L6.22222 11.0311L4.33778 12.9156L3.08444 11.6622L4.96889 9.77778L3.07556 7.89333ZM9.33333 0.888889L8.44444 0H4L3.11111 0.888889H0V2.66667H12.4444V0.888889H9.33333Z" fill="#747E8A"/>
            </svg>
        </label>
    )
}

export default Checkbox;