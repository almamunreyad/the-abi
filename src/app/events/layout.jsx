



export async function generateMetadata() {
    // seo data fetch
    return {
      title: "Events Page",
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