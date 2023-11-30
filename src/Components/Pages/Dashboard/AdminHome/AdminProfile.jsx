// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
// import { useQuery } from "@tanstack/react-query";
import { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecure from '../../Shared/Hooks/useAxiosSecure';
import useTours from '../../Shared/Hooks/useTours';
import useFindGuide from '../../Shared/Hooks/useFindGuide';
import useBookings from '../../Shared/Hooks/useBookings';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const AdminProfile = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [tours, filteredTour, refetch, loading] = useTours();
    const [guides] = useFindGuide();
    const [bookings] = useBookings();


//     const getPath = (x, y, width, height) => {
//         return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//   Z`;
//     };

    // const TriangleBar = (props) => {
    //     const { fill, x, y, width, height } = props;

    //     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    // };


    // // custom piechart functions 
    // const RADIAN = Math.PI / 180;
    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

    //     return (
    //         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //             {`${(percent * 100).toFixed(0)}%`}
    //         </text>
    //     );
    // };
    // const pieChartData = chartData.map(data => {
    //     return { name: data.category, value: data.revenue }
    // })
    return (
        <></>
    );
};

export default AdminProfile;