import "./Topbar.css";

export default function Topbar() {
    return (
        <>
            <div className="topbar">
                <div className="topbar-text">
                    UN UNIVERSO DE COBERTURAS PARA CADA NECESIDAD
                </div>
                <a href="https://www.mapfre.com.ar" target="_blank" rel="noopener noreferrer">
                    <img className="topbar-logo" src="/icons/mapfre-logo.png" alt="MAPFRE" />
                </a>
            </div>
            <div className="main-hero" role="img" aria-label="Mentor Digital"></div>
        </>
    );
}