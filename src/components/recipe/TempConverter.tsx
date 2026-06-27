import { useState } from 'react';
import { ThermometerSun, Info } from 'lucide-react';

interface TempConverterProps {
  defaultCelsius?: number;
}

export default function TempConverter({ defaultCelsius = 150 }: TempConverterProps) {
  const [celsius, setCelsius] = useState<string>(defaultCelsius.toString());
  const [activeTab, setActiveTab] = useState<'c2f' | 'f2c'>('c2f');

  const celsiusNum = parseFloat(celsius) || 0;
  const fahrenheitFromC = +(celsiusNum * 9 / 5 + 32).toFixed(0);

  const [fahrenheit, setFahrenheit] = useState<string>('');
  const fahrenheitNum = parseFloat(fahrenheit) || 0;
  const celsiusFromF = +((fahrenheitNum - 32) * 5 / 9).toFixed(0);

  const ovenGuides = [
    { name: '低温慢烤', celsius: '120-140', fahrenheit: '250-285', use: '长时间慢烤、低温发酵' },
    { name: '中温烘烤', celsius: '150-170', fahrenheit: '300-340', use: '戚风蛋糕、海绵蛋糕' },
    { name: '标准温度', celsius: '170-190', fahrenheit: '340-375', use: '饼干、小蛋糕、面包' },
    { name: '高温烘烤', celsius: '190-220', fahrenheit: '375-425', use: '面包、酥皮、泡芙' },
    { name: '超高温', celsius: '220-250', fahrenheit: '425-480', use: '披萨、薄脆饼' },
  ];

  return (
    <div className="bg-white rounded-card p-5 shadow-sm border border-warm-100">
      <div className="flex items-center gap-2 mb-4">
        <ThermometerSun className="w-5 h-5 text-primary" />
        <h4 className="font-semibold text-warm-900">温度换算器</h4>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab('c2f')}
          className={`flex-1 py-2 text-sm font-medium rounded-btn transition-colors ${
            activeTab === 'c2f'
              ? 'bg-primary text-white'
              : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
          }`}
        >
          °C → °F
        </button>
        <button
          onClick={() => setActiveTab('f2c')}
          className={`flex-1 py-2 text-sm font-medium rounded-btn transition-colors ${
            activeTab === 'f2c'
              ? 'bg-primary text-white'
              : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
          }`}
        >
          °F → °C
        </button>
      </div>

      {activeTab === 'c2f' ? (
        <div className="space-y-3">
          <div>
            <label className="text-sm text-warm-500 mb-1 block">摄氏度 (°C)</label>
            <input
              type="number"
              value={celsius}
              onChange={(e) => setCelsius(e.target.value)}
              className="w-full px-4 py-3 rounded-btn border border-warm-200 text-lg font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="text-center text-warm-400">
            ↓
          </div>
          <div className="bg-primary/10 rounded-btn p-4 text-center">
            <p className="text-sm text-warm-500 mb-1">华氏度 (°F)</p>
            <p className="text-3xl font-display font-bold text-primary">
              {fahrenheitFromC}°F
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div>
            <label className="text-sm text-warm-500 mb-1 block">华氏度 (°F)</label>
            <input
              type="number"
              value={fahrenheit}
              onChange={(e) => setFahrenheit(e.target.value)}
              className="w-full px-4 py-3 rounded-btn border border-warm-200 text-lg font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="输入华氏度"
            />
          </div>
          <div className="text-center text-warm-400">
            ↓
          </div>
          <div className="bg-primary/10 rounded-btn p-4 text-center">
            <p className="text-sm text-warm-500 mb-1">摄氏度 (°C)</p>
            <p className="text-3xl font-display font-bold text-primary">
              {celsiusFromF}°C
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-warm-100">
        <div className="flex items-center gap-1.5 mb-3">
          <Info className="w-4 h-4 text-warm-400" />
          <p className="text-sm text-warm-500">烤箱温度参考</p>
        </div>
        <div className="space-y-2">
          {ovenGuides.map((guide) => (
            <div
              key={guide.name}
              className="p-3 bg-warm-50 rounded-btn"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-warm-800">{guide.name}</span>
                <span className="text-xs text-primary font-medium">
                  {guide.celsius}°C / {guide.fahrenheit}°F
                </span>
              </div>
              <p className="text-xs text-warm-500">{guide.use}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
