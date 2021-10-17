// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { Box } from "@chakra-ui/layout";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
          {/* Body Tag styled for 100vh minheight */}
          <Box as="body" sx={{ minHeight: "100vh" }}>
            <Main />
            <NextScript />
          </Box>
      </Html>
    );
  }
}

export default MyDocument;
