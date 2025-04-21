// View to format documentation
class DocsView {
    // Format documentation for API response
    static formatResponse(documentation) {
      return {
        ...documentation,
        generated_at: new Date().toISOString(),
        status: "success",
      }
    }
}

module.exports = DocsView;
