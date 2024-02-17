import "./Select.css";

export function Select<T>({ options, onChange, map = it => it?.toString() ?? "" }: { options: T[], onChange: (option: T) => void, map?: (it: T) => string }) {
    return <select className="select" onChange={e => { if(e.target.selectedIndex > 0) onChange(options[e.target.selectedIndex - 1])}}>
        <option className="select-option">Select something</option>
        {options.map((it, index) => <option className="select-option" value={index}>{map(it)}</option>)}
    </select>;
}