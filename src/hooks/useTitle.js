
import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Oral care - ${title}`;
    }, [title])
};

export default useTitle;