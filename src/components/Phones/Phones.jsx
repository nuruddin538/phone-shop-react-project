import useGetPhones from '../../hook/useGetPhones';
import PhonesCard from './PhonesCard';

const Phones = ({ phones }) => {
  console.log(phones);
  return (
    <div>
      <h1 className="text-2xl text-center">All categories phones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {phones?.map(phone => (
          <PhonesCard key={phone.id} phone={phone}></PhonesCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;
