import Image from 'next/image';

type Props = {
  src: String,
  width: String,
  height: String,
  placeholder?: String,
  alt: String,
  url?: Boolean,
  lazy?: Boolean,
};

const ImageLoader = (props: Props) => {
  const loader = (src: String) => 'Loader';

  const {
    url,
    width,
    height,
    src,
    placeholder,
    alt,
    lazy,
  } = props;

  return (
    <Image
      src={url ? loader(src) : `${src}`}
      width={`${width}`}
      height={`${height}`}
      placeholder={`${placeholder}`}
      alt={`${alt}`}
      loading={lazy ? 'lazy' : 'eager'}
    />
  );
};

ImageLoader.defaultProps = {
  lazy: true,
  placeholder: 'empty',
  url: false,
};

export default ImageLoader;
