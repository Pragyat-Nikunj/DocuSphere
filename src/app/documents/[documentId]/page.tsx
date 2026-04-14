import { Editor } from "./editor";
import { Toolbar } from "./toolbar";


interface DocumentPageIdProps {
    params: Promise<{documentId: string}>;
}

const DocumentIdPage = async ({ params }: DocumentPageIdProps) => {
    const {documentId} = await params;
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Toolbar />
            <Editor />
        </div>
    )
}

export default DocumentIdPage;