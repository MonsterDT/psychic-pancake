import numpy as np
import json
import sys
sys.path.insert(0, '/workspace')

from skin_analyzer.api.main import convert_numpy_types

test_data = {
    'int_val': np.int32(42),
    'float_val': np.float64(3.14),
    'nested': {
        'arr': np.array([1, 2, 3], dtype=np.int32),
        'val': np.int64(100)
    },
    'list': [np.int32(1), np.float32(2.5), 'normal'],
    'normal_int': 123,
    'normal_str': 'hello'
}

print("测试前类型：")
print(f"  int_val 类型: {type(test_data['int_val'])}")
print(f"  float_val 类型: {type(test_data['float_val'])}")
print(f"  nested.val 类型: {type(test_data['nested']['val'])}")

try:
    json.dumps(test_data)
    print("\n❌ 错误：本应该失败但成功了")
except TypeError as e:
    print(f"\n✅ 预期错误: {e}")

print("\n转换后...")
converted = convert_numpy_types(test_data)

print(f"  int_val 类型: {type(converted['int_val'])} = {converted['int_val']}")
print(f"  float_val 类型: {type(converted['float_val'])} = {converted['float_val']}")
print(f"  nested.val 类型: {type(converted['nested']['val'])} = {converted['nested']['val']}")
print(f"  nested.arr 类型: {type(converted['nested']['arr'])} = {converted['nested']['arr']}")

try:
    result = json.dumps(converted)
    print(f"\n✅ JSON 序列化成功！")
    print(f"结果: {result[:200]}...")
except Exception as e:
    print(f"\n❌ 仍然失败: {e}")
