



export async function generateMetadata() {
    // seo data fetch
    return {
      title: "About Page",
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