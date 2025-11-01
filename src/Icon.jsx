function Icon({ icon_name, className = "", onClick }) {
    return (
        <span
            className={`material-symbols-outlined icon-small ${className}`}
            style={{ fontSize: 40 }}
            onClick={onClick}
        >
            {icon_name}
        </span>
    );
}

export default Icon;


