import { Editor } from "./editor";

interface DocumentPageIdProps {
    params: Promise<{documentId: string}>;
}

const DocumentIdPage = async ({ params }: DocumentPageIdProps) => {
    const {documentId} = await params;
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Editor />
        </div>
    )
}

export default DocumentIdPage;