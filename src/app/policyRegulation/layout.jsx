



export async function generateMetadata() {
    // seo data fetch
    return {
      title: "Policy Regulation Page",
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