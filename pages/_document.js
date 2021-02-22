import Document, { Head, Html, Main, NextScript } from "next/document"

class myDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="bg-gray-500">
                    {/* required */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}

export default myDocument
