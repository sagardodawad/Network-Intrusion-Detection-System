# # import sys
# # import pandas as pd
# # import joblib

# # # Load model and column order
# # model_path = 'KNeighbors_multiclass_model.pkl'
# # column_order_path = 'column_order.pkl'

# # knn_model = joblib.load(model_path)
# # column_order = joblib.load(column_order_path)

# # # Input processing
# # input_data = sys.argv[1]
# # input_list = eval(input_data)  # Convert the string back to a list

# # # Define columns
# # features_to_encode = ['protocol_type', 'service']
# # numeric_features = [
# #     'duration', 'src_bytes', 'dst_bytes', 'wrong_fragment', 'urgent', 'hot',
# #     'num_failed_logins', 'num_compromised', 'root_shell', 'su_attempted',
# #     'num_root', 'num_file_creations', 'num_shells', 'num_access_files',
# #     'num_outbound_cmds', 'count', 'srv_count', 'serror_rate',
# #     'srv_serror_rate', 'rerror_rate', 'srv_rerror_rate', 'same_srv_rate',
# #     'diff_srv_rate', 'srv_diff_host_rate', 'dst_host_count', 'dst_host_srv_count',
# #     'dst_host_same_srv_rate', 'dst_host_diff_srv_rate',
# #     'dst_host_same_src_port_rate', 'dst_host_srv_diff_host_rate',
# #     'dst_host_serror_rate', 'dst_host_srv_serror_rate', 'dst_host_rerror_rate',
# #     'dst_host_srv_rerror_rate'
# # ]

# # # Construct DataFrame
# # df = pd.DataFrame([input_list], columns=features_to_encode + numeric_features)

# # # Encode categorical features
# # encoded = pd.get_dummies(df[features_to_encode])
# # encoded = encoded.reindex(columns=column_order, fill_value=0)

# # # Combine with numeric features
# # final_input = pd.concat([encoded, df[numeric_features]], axis=1)

# # # Predict
# # prediction = knn_model.predict(final_input)[0]
# # attack_labels = ['Normal', 'DoS', 'Probe', 'R2L', 'U2R']
# # print(attack_labels[prediction])


# import pandas as pd
# import joblib

# # Load model and column order
# model_path = './KNeighbors_multiclass_model.pkl'
# column_order_path = './column_order.pkl'

# knn_model = joblib.load(model_path)
# column_order = joblib.load(column_order_path)

# # Define new input data
# columns = [
#     'duration', 'protocol_type', 'service', 'flag', 'src_bytes', 'dst_bytes',
#     'land', 'wrong_fragment', 'urgent', 'hot', 'num_failed_logins',
#     'logged_in', 'num_compromised', 'root_shell', 'su_attempted', 'num_root',
#     'num_file_creations', 'num_shells', 'num_access_files', 'num_outbound_cmds',
#     'is_host_login', 'is_guest_login', 'count', 'srv_count', 'serror_rate',
#     'srv_serror_rate', 'rerror_rate', 'srv_rerror_rate', 'same_srv_rate',
#     'diff_srv_rate', 'srv_diff_host_rate', 'dst_host_count', 'dst_host_srv_count',
#     'dst_host_same_srv_rate', 'dst_host_diff_srv_rate', 'dst_host_same_src_port_rate',
#     'dst_host_srv_diff_host_rate', 'dst_host_serror_rate', 'dst_host_srv_serror_rate',
#     'dst_host_rerror_rate', 'dst_host_srv_rerror_rate'
# ]

# # new_data = pd.DataFrame([
# #     [0, 'tcp', 'remote_job', 'S0', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 270, 23, 1.00, 1.00, 0.00, 0.00, 0.09, 0.05, 0.00, 255, 23, 0.09, 0.05, 0.00, 0.00, 1.00, 1.00, 0.00, 0.00]
# # ], columns=columns)


# # Input processing
# import sys
# input_data = "0,'tcp','ftp_data','SF',491,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0.00,0.00,0.00,0.00,1.00,0.00,0.00,150,25,0.17,0.03,0.17,0.00,0.00,0.00,0.05,0.00"
# # input_data = sys.argv[1]
# input_list = eval(input_data) 

# # Encode categorical features
# features_to_encode = ['protocol_type', 'service']
# encoded_new_data = pd.get_dummies(new_data[features_to_encode])

# # Align columns with training set
# encoded_new_data = encoded_new_data.reindex(columns=column_order, fill_value=0)

# # Select numeric features
# numeric_features = [
#     'duration', 'src_bytes', 'dst_bytes', 'wrong_fragment', 'urgent', 'hot',
#     'num_failed_logins', 'num_compromised', 'root_shell', 'su_attempted',
#     'num_root', 'num_file_creations', 'num_shells', 'num_access_files',
#     'num_outbound_cmds', 'count', 'srv_count', 'serror_rate',
#     'srv_serror_rate', 'rerror_rate', 'srv_rerror_rate', 'same_srv_rate',
#     'diff_srv_rate', 'srv_diff_host_rate', 'dst_host_count', 'dst_host_srv_count',
#     'dst_host_same_srv_rate', 'dst_host_diff_srv_rate',
#     'dst_host_same_src_port_rate', 'dst_host_srv_diff_host_rate',
#     'dst_host_serror_rate', 'dst_host_srv_serror_rate', 'dst_host_rerror_rate',
#     'dst_host_srv_rerror_rate'
# ]

# new_data_final = pd.concat([encoded_new_data, new_data[numeric_features]], axis=1)

# # Make predictions
# multi_prediction = knn_model.predict(new_data_final)[0]
# attack_labels = ['Normal', 'DoS', 'Probe', 'R2L', 'U2R']
# attack_category = attack_labels[multi_prediction]
# print(f"Attack Detected: {attack_category}")


import pandas as pd
import joblib

# Load model and column order
model_path = 'KNeighbors_multiclass_model.pkl'
column_order_path = 'column_order.pkl'

knn_model = joblib.load(model_path)
column_order = joblib.load(column_order_path)

# Define new input data
columns = [
    'duration', 'protocol_type', 'service', 'flag', 'src_bytes', 'dst_bytes',
    'land', 'wrong_fragment', 'urgent', 'hot', 'num_failed_logins',
    'logged_in', 'num_compromised', 'root_shell', 'su_attempted', 'num_root',
    'num_file_creations', 'num_shells', 'num_access_files', 'num_outbound_cmds',
    'is_host_login', 'is_guest_login', 'count', 'srv_count', 'serror_rate',
    'srv_serror_rate', 'rerror_rate', 'srv_rerror_rate', 'same_srv_rate',
    'diff_srv_rate', 'srv_diff_host_rate', 'dst_host_count', 'dst_host_srv_count',
    'dst_host_same_srv_rate', 'dst_host_diff_srv_rate', 'dst_host_same_src_port_rate',
    'dst_host_srv_diff_host_rate', 'dst_host_serror_rate', 'dst_host_srv_serror_rate',
    'dst_host_rerror_rate', 'dst_host_srv_rerror_rate'
]

# new_data = pd.DataFrame([
#     [0, 'tcp', 'remote_job', 'S0', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 270, 23, 1.00, 1.00, 0.00, 0.00, 0.09, 0.05, 0.00, 255, 23, 0.09, 0.05, 0.00, 0.00, 1.00, 1.00, 0.00, 0.00]
# ], columns=columns)


# Input processing
import sys
input_data = sys.argv[1]
# new_input = "0, 'tcp', 'remote_job', 'S0', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 270, 23, 1.00, 1.00, 0.00, 0.00, 0.09, 0.05, 0.00, 255, 23, 0.09, 0.05, 0.00, 0.00, 1.00, 1.00, 0.00, 0.00"


# Convert string to list by splitting at commas and removing unwanted quotes
new_data_list = [item.strip("'") for item in input_data.split(",")]


# Convert the list to DataFrame
new_data = pd.DataFrame([new_data_list], columns=columns)
# Encode categorical features
features_to_encode = ['protocol_type', 'service']
encoded_new_data = pd.get_dummies(new_data[features_to_encode])

# Align columns with training set
encoded_new_data = encoded_new_data.reindex(columns=column_order, fill_value=0)

# Select numeric features
numeric_features = [
    'duration', 'src_bytes', 'dst_bytes', 'wrong_fragment', 'urgent', 'hot',
    'num_failed_logins', 'num_compromised', 'root_shell', 'su_attempted',
    'num_root', 'num_file_creations', 'num_shells', 'num_access_files',
    'num_outbound_cmds', 'count', 'srv_count', 'serror_rate',
    'srv_serror_rate', 'rerror_rate', 'srv_rerror_rate', 'same_srv_rate',
    'diff_srv_rate', 'srv_diff_host_rate', 'dst_host_count', 'dst_host_srv_count',
    'dst_host_same_srv_rate', 'dst_host_diff_srv_rate',
    'dst_host_same_src_port_rate', 'dst_host_srv_diff_host_rate',
    'dst_host_serror_rate', 'dst_host_srv_serror_rate', 'dst_host_rerror_rate',
    'dst_host_srv_rerror_rate'
]

new_data_final = pd.concat([encoded_new_data, new_data[numeric_features]], axis=1)

# Make predictions
multi_prediction = knn_model.predict(new_data_final)[0]
attack_labels = ['Normal', 'DoS', 'Probe', 'R2L', 'U2R']
attack_category = attack_labels[multi_prediction]
print(f"Attack Detected: {attack_category}")
