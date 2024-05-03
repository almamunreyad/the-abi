



export async function generateMetadata() {
    // seo data fetch
    return {
      title: "Industry Page",
    };
  }
  

const layout = ({ children }) => {
    return (
        <div>
            { children }
        </div>
    );
};

export default layout;