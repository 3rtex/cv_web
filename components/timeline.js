export default function Timeline({ orientation = "left", children }) {
    console.log(children)
    return <div className="flex">
        <div className={orientation == "left" ? "timeline tl-left" : "timeline tl-right"}>
            {children.map(c=>
            <div className="date">
                <div className="date-content ">
                    {c}
                </div>
            </div>)}
        </div>
    </div>

}