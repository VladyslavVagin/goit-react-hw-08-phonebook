import { ThreeCircles } from 'react-loader-spinner';

const LoaderGeneral = () => {
  return (
    <div className="loaderGen">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#d18f00"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass="loaderWrapp"
      />
    </div>
  );
};

export default LoaderGeneral;
