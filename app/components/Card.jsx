export default function Card({ name, points, img }) {
  return (
    <div className="p-4 w-full rounded-2xl bg-cover" style={{ backgroundImage: `url("${img}")`, aspectRatio: '16 / 9' }}>
      <div className="flex justify-between items-end">
        <div className="text-white font-medium text-xl">{ name }</div>
        <div className="text-white">{ parseInt(points).toLocaleString() } points</div>
      </div>
    </div>
  )
} 