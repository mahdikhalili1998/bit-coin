import chartUp from "../assets/chart-up.svg";
import chartDown from "../assets/chart-down.svg";
import { RotatingLines } from "react-loader-spinner";
function TableCoin({ coins, loading }) {
  return (
    <>
      <div>
        {loading ? (
          <RotatingLines
            strokeColor="#fff"
            strokeWidth="2"
            animationDuration="0.75"
            width="150"
            visible={true}
          />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Coin</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h</th>
                <th>Total Volume</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {coins.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div>
                      <img src={item.image} />
                      <span>{item.symbol.toUpperCase()}</span>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.current_price.toLocaleString()}</td>
                  <td>{item.price_change_percentage_24h.toFixed(2)}%</td>
                  <td>{item.total_volume.toLocaleString()}</td>
                  <td>
                    <img
                      src={
                        item.price_change_percentage_24h > 0
                          ? chartUp
                          : chartDown
                      }
                      alt={item.name}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default TableCoin;
