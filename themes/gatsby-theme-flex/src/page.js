/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout/layout"
import * as blocks from "./blocks"

export default ({ title, description, slug, body, image }) => {
  return (
    <Layout
      title={title}
      description={description}
      url={slug}
      image={image?.thumbnail?.fluid.src}
    >
      <MDXProvider components={{ ...blocks }}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}
