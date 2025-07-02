export const SingleCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className="md:flex-row flex-col justify-center items-center p-3 gap-3">
      <div
        style={{
          boxShadow: 'inset 0 -8px 24px -8px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(8px)',
          position: 'relative',
        }}
        className="group overflow-hidden">
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '60px',
            background:
              'linear-gradient(to top, rgba(0, 0, 0,0.6), rgba(0, 0, 0,0))',
            backdropFilter: 'blur(8px)',
            pointerEvents: 'none',
          }}
        />
        <img className="w-[300px] h-[250px]" src={item.src} alt="" />
        <p className="text-center transition-transform duration-300 group-hover:block text-white bg-black/30 p-2 font-bold transform translate-y-[40px] group-hover:translate-y-[-40px]">
          {item.des}
        </p>
      </div>
    </div>
  );
};

export function SecsingleCard({ item }) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 ">
      <img className="w-[240px]" src={item.src} alt="" />
      <p>{item.des}</p>
      <p>{item.price}</p>
    </div>
  );
}
