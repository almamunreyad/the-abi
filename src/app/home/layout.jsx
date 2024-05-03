



export async function generateMetadata() {
    // seo data fetch
    return {
      title: "Home Page v -2",
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