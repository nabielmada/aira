module.exports = {

"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/core/node_modules/@opentelemetry/semantic-conventions/build/esm/internal/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Creates a const map from the given values
 * @param values - An array of values to be used as keys and values in the map.
 * @returns A populated version of the map with the values and keys derived from the values.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s({
    "createConstMap": (()=>createConstMap)
});
function createConstMap(values) {
    // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
    var res = {};
    var len = values.length;
    for(var lp = 0; lp < len; lp++){
        var val = values[lp];
        if (val) {
            res[String(val).toUpperCase().replace(/[-.]/g, '_')] = val;
        }
    }
    return res;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/core/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "AWSECSLAUNCHTYPEVALUES_EC2": (()=>AWSECSLAUNCHTYPEVALUES_EC2),
    "AWSECSLAUNCHTYPEVALUES_FARGATE": (()=>AWSECSLAUNCHTYPEVALUES_FARGATE),
    "AwsEcsLaunchtypeValues": (()=>AwsEcsLaunchtypeValues),
    "CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS": (()=>CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS),
    "CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC": (()=>CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC),
    "CLOUDPLATFORMVALUES_AWS_EC2": (()=>CLOUDPLATFORMVALUES_AWS_EC2),
    "CLOUDPLATFORMVALUES_AWS_ECS": (()=>CLOUDPLATFORMVALUES_AWS_ECS),
    "CLOUDPLATFORMVALUES_AWS_EKS": (()=>CLOUDPLATFORMVALUES_AWS_EKS),
    "CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK": (()=>CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK),
    "CLOUDPLATFORMVALUES_AWS_LAMBDA": (()=>CLOUDPLATFORMVALUES_AWS_LAMBDA),
    "CLOUDPLATFORMVALUES_AZURE_AKS": (()=>CLOUDPLATFORMVALUES_AZURE_AKS),
    "CLOUDPLATFORMVALUES_AZURE_APP_SERVICE": (()=>CLOUDPLATFORMVALUES_AZURE_APP_SERVICE),
    "CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES": (()=>CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES),
    "CLOUDPLATFORMVALUES_AZURE_FUNCTIONS": (()=>CLOUDPLATFORMVALUES_AZURE_FUNCTIONS),
    "CLOUDPLATFORMVALUES_AZURE_VM": (()=>CLOUDPLATFORMVALUES_AZURE_VM),
    "CLOUDPLATFORMVALUES_GCP_APP_ENGINE": (()=>CLOUDPLATFORMVALUES_GCP_APP_ENGINE),
    "CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS": (()=>CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS),
    "CLOUDPLATFORMVALUES_GCP_CLOUD_RUN": (()=>CLOUDPLATFORMVALUES_GCP_CLOUD_RUN),
    "CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE": (()=>CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE),
    "CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE": (()=>CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE),
    "CLOUDPROVIDERVALUES_ALIBABA_CLOUD": (()=>CLOUDPROVIDERVALUES_ALIBABA_CLOUD),
    "CLOUDPROVIDERVALUES_AWS": (()=>CLOUDPROVIDERVALUES_AWS),
    "CLOUDPROVIDERVALUES_AZURE": (()=>CLOUDPROVIDERVALUES_AZURE),
    "CLOUDPROVIDERVALUES_GCP": (()=>CLOUDPROVIDERVALUES_GCP),
    "CloudPlatformValues": (()=>CloudPlatformValues),
    "CloudProviderValues": (()=>CloudProviderValues),
    "HOSTARCHVALUES_AMD64": (()=>HOSTARCHVALUES_AMD64),
    "HOSTARCHVALUES_ARM32": (()=>HOSTARCHVALUES_ARM32),
    "HOSTARCHVALUES_ARM64": (()=>HOSTARCHVALUES_ARM64),
    "HOSTARCHVALUES_IA64": (()=>HOSTARCHVALUES_IA64),
    "HOSTARCHVALUES_PPC32": (()=>HOSTARCHVALUES_PPC32),
    "HOSTARCHVALUES_PPC64": (()=>HOSTARCHVALUES_PPC64),
    "HOSTARCHVALUES_X86": (()=>HOSTARCHVALUES_X86),
    "HostArchValues": (()=>HostArchValues),
    "OSTYPEVALUES_AIX": (()=>OSTYPEVALUES_AIX),
    "OSTYPEVALUES_DARWIN": (()=>OSTYPEVALUES_DARWIN),
    "OSTYPEVALUES_DRAGONFLYBSD": (()=>OSTYPEVALUES_DRAGONFLYBSD),
    "OSTYPEVALUES_FREEBSD": (()=>OSTYPEVALUES_FREEBSD),
    "OSTYPEVALUES_HPUX": (()=>OSTYPEVALUES_HPUX),
    "OSTYPEVALUES_LINUX": (()=>OSTYPEVALUES_LINUX),
    "OSTYPEVALUES_NETBSD": (()=>OSTYPEVALUES_NETBSD),
    "OSTYPEVALUES_OPENBSD": (()=>OSTYPEVALUES_OPENBSD),
    "OSTYPEVALUES_SOLARIS": (()=>OSTYPEVALUES_SOLARIS),
    "OSTYPEVALUES_WINDOWS": (()=>OSTYPEVALUES_WINDOWS),
    "OSTYPEVALUES_Z_OS": (()=>OSTYPEVALUES_Z_OS),
    "OsTypeValues": (()=>OsTypeValues),
    "SEMRESATTRS_AWS_ECS_CLUSTER_ARN": (()=>SEMRESATTRS_AWS_ECS_CLUSTER_ARN),
    "SEMRESATTRS_AWS_ECS_CONTAINER_ARN": (()=>SEMRESATTRS_AWS_ECS_CONTAINER_ARN),
    "SEMRESATTRS_AWS_ECS_LAUNCHTYPE": (()=>SEMRESATTRS_AWS_ECS_LAUNCHTYPE),
    "SEMRESATTRS_AWS_ECS_TASK_ARN": (()=>SEMRESATTRS_AWS_ECS_TASK_ARN),
    "SEMRESATTRS_AWS_ECS_TASK_FAMILY": (()=>SEMRESATTRS_AWS_ECS_TASK_FAMILY),
    "SEMRESATTRS_AWS_ECS_TASK_REVISION": (()=>SEMRESATTRS_AWS_ECS_TASK_REVISION),
    "SEMRESATTRS_AWS_EKS_CLUSTER_ARN": (()=>SEMRESATTRS_AWS_EKS_CLUSTER_ARN),
    "SEMRESATTRS_AWS_LOG_GROUP_ARNS": (()=>SEMRESATTRS_AWS_LOG_GROUP_ARNS),
    "SEMRESATTRS_AWS_LOG_GROUP_NAMES": (()=>SEMRESATTRS_AWS_LOG_GROUP_NAMES),
    "SEMRESATTRS_AWS_LOG_STREAM_ARNS": (()=>SEMRESATTRS_AWS_LOG_STREAM_ARNS),
    "SEMRESATTRS_AWS_LOG_STREAM_NAMES": (()=>SEMRESATTRS_AWS_LOG_STREAM_NAMES),
    "SEMRESATTRS_CLOUD_ACCOUNT_ID": (()=>SEMRESATTRS_CLOUD_ACCOUNT_ID),
    "SEMRESATTRS_CLOUD_AVAILABILITY_ZONE": (()=>SEMRESATTRS_CLOUD_AVAILABILITY_ZONE),
    "SEMRESATTRS_CLOUD_PLATFORM": (()=>SEMRESATTRS_CLOUD_PLATFORM),
    "SEMRESATTRS_CLOUD_PROVIDER": (()=>SEMRESATTRS_CLOUD_PROVIDER),
    "SEMRESATTRS_CLOUD_REGION": (()=>SEMRESATTRS_CLOUD_REGION),
    "SEMRESATTRS_CONTAINER_ID": (()=>SEMRESATTRS_CONTAINER_ID),
    "SEMRESATTRS_CONTAINER_IMAGE_NAME": (()=>SEMRESATTRS_CONTAINER_IMAGE_NAME),
    "SEMRESATTRS_CONTAINER_IMAGE_TAG": (()=>SEMRESATTRS_CONTAINER_IMAGE_TAG),
    "SEMRESATTRS_CONTAINER_NAME": (()=>SEMRESATTRS_CONTAINER_NAME),
    "SEMRESATTRS_CONTAINER_RUNTIME": (()=>SEMRESATTRS_CONTAINER_RUNTIME),
    "SEMRESATTRS_DEPLOYMENT_ENVIRONMENT": (()=>SEMRESATTRS_DEPLOYMENT_ENVIRONMENT),
    "SEMRESATTRS_DEVICE_ID": (()=>SEMRESATTRS_DEVICE_ID),
    "SEMRESATTRS_DEVICE_MODEL_IDENTIFIER": (()=>SEMRESATTRS_DEVICE_MODEL_IDENTIFIER),
    "SEMRESATTRS_DEVICE_MODEL_NAME": (()=>SEMRESATTRS_DEVICE_MODEL_NAME),
    "SEMRESATTRS_FAAS_ID": (()=>SEMRESATTRS_FAAS_ID),
    "SEMRESATTRS_FAAS_INSTANCE": (()=>SEMRESATTRS_FAAS_INSTANCE),
    "SEMRESATTRS_FAAS_MAX_MEMORY": (()=>SEMRESATTRS_FAAS_MAX_MEMORY),
    "SEMRESATTRS_FAAS_NAME": (()=>SEMRESATTRS_FAAS_NAME),
    "SEMRESATTRS_FAAS_VERSION": (()=>SEMRESATTRS_FAAS_VERSION),
    "SEMRESATTRS_HOST_ARCH": (()=>SEMRESATTRS_HOST_ARCH),
    "SEMRESATTRS_HOST_ID": (()=>SEMRESATTRS_HOST_ID),
    "SEMRESATTRS_HOST_IMAGE_ID": (()=>SEMRESATTRS_HOST_IMAGE_ID),
    "SEMRESATTRS_HOST_IMAGE_NAME": (()=>SEMRESATTRS_HOST_IMAGE_NAME),
    "SEMRESATTRS_HOST_IMAGE_VERSION": (()=>SEMRESATTRS_HOST_IMAGE_VERSION),
    "SEMRESATTRS_HOST_NAME": (()=>SEMRESATTRS_HOST_NAME),
    "SEMRESATTRS_HOST_TYPE": (()=>SEMRESATTRS_HOST_TYPE),
    "SEMRESATTRS_K8S_CLUSTER_NAME": (()=>SEMRESATTRS_K8S_CLUSTER_NAME),
    "SEMRESATTRS_K8S_CONTAINER_NAME": (()=>SEMRESATTRS_K8S_CONTAINER_NAME),
    "SEMRESATTRS_K8S_CRONJOB_NAME": (()=>SEMRESATTRS_K8S_CRONJOB_NAME),
    "SEMRESATTRS_K8S_CRONJOB_UID": (()=>SEMRESATTRS_K8S_CRONJOB_UID),
    "SEMRESATTRS_K8S_DAEMONSET_NAME": (()=>SEMRESATTRS_K8S_DAEMONSET_NAME),
    "SEMRESATTRS_K8S_DAEMONSET_UID": (()=>SEMRESATTRS_K8S_DAEMONSET_UID),
    "SEMRESATTRS_K8S_DEPLOYMENT_NAME": (()=>SEMRESATTRS_K8S_DEPLOYMENT_NAME),
    "SEMRESATTRS_K8S_DEPLOYMENT_UID": (()=>SEMRESATTRS_K8S_DEPLOYMENT_UID),
    "SEMRESATTRS_K8S_JOB_NAME": (()=>SEMRESATTRS_K8S_JOB_NAME),
    "SEMRESATTRS_K8S_JOB_UID": (()=>SEMRESATTRS_K8S_JOB_UID),
    "SEMRESATTRS_K8S_NAMESPACE_NAME": (()=>SEMRESATTRS_K8S_NAMESPACE_NAME),
    "SEMRESATTRS_K8S_NODE_NAME": (()=>SEMRESATTRS_K8S_NODE_NAME),
    "SEMRESATTRS_K8S_NODE_UID": (()=>SEMRESATTRS_K8S_NODE_UID),
    "SEMRESATTRS_K8S_POD_NAME": (()=>SEMRESATTRS_K8S_POD_NAME),
    "SEMRESATTRS_K8S_POD_UID": (()=>SEMRESATTRS_K8S_POD_UID),
    "SEMRESATTRS_K8S_REPLICASET_NAME": (()=>SEMRESATTRS_K8S_REPLICASET_NAME),
    "SEMRESATTRS_K8S_REPLICASET_UID": (()=>SEMRESATTRS_K8S_REPLICASET_UID),
    "SEMRESATTRS_K8S_STATEFULSET_NAME": (()=>SEMRESATTRS_K8S_STATEFULSET_NAME),
    "SEMRESATTRS_K8S_STATEFULSET_UID": (()=>SEMRESATTRS_K8S_STATEFULSET_UID),
    "SEMRESATTRS_OS_DESCRIPTION": (()=>SEMRESATTRS_OS_DESCRIPTION),
    "SEMRESATTRS_OS_NAME": (()=>SEMRESATTRS_OS_NAME),
    "SEMRESATTRS_OS_TYPE": (()=>SEMRESATTRS_OS_TYPE),
    "SEMRESATTRS_OS_VERSION": (()=>SEMRESATTRS_OS_VERSION),
    "SEMRESATTRS_PROCESS_COMMAND": (()=>SEMRESATTRS_PROCESS_COMMAND),
    "SEMRESATTRS_PROCESS_COMMAND_ARGS": (()=>SEMRESATTRS_PROCESS_COMMAND_ARGS),
    "SEMRESATTRS_PROCESS_COMMAND_LINE": (()=>SEMRESATTRS_PROCESS_COMMAND_LINE),
    "SEMRESATTRS_PROCESS_EXECUTABLE_NAME": (()=>SEMRESATTRS_PROCESS_EXECUTABLE_NAME),
    "SEMRESATTRS_PROCESS_EXECUTABLE_PATH": (()=>SEMRESATTRS_PROCESS_EXECUTABLE_PATH),
    "SEMRESATTRS_PROCESS_OWNER": (()=>SEMRESATTRS_PROCESS_OWNER),
    "SEMRESATTRS_PROCESS_PID": (()=>SEMRESATTRS_PROCESS_PID),
    "SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION": (()=>SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION),
    "SEMRESATTRS_PROCESS_RUNTIME_NAME": (()=>SEMRESATTRS_PROCESS_RUNTIME_NAME),
    "SEMRESATTRS_PROCESS_RUNTIME_VERSION": (()=>SEMRESATTRS_PROCESS_RUNTIME_VERSION),
    "SEMRESATTRS_SERVICE_INSTANCE_ID": (()=>SEMRESATTRS_SERVICE_INSTANCE_ID),
    "SEMRESATTRS_SERVICE_NAME": (()=>SEMRESATTRS_SERVICE_NAME),
    "SEMRESATTRS_SERVICE_NAMESPACE": (()=>SEMRESATTRS_SERVICE_NAMESPACE),
    "SEMRESATTRS_SERVICE_VERSION": (()=>SEMRESATTRS_SERVICE_VERSION),
    "SEMRESATTRS_TELEMETRY_AUTO_VERSION": (()=>SEMRESATTRS_TELEMETRY_AUTO_VERSION),
    "SEMRESATTRS_TELEMETRY_SDK_LANGUAGE": (()=>SEMRESATTRS_TELEMETRY_SDK_LANGUAGE),
    "SEMRESATTRS_TELEMETRY_SDK_NAME": (()=>SEMRESATTRS_TELEMETRY_SDK_NAME),
    "SEMRESATTRS_TELEMETRY_SDK_VERSION": (()=>SEMRESATTRS_TELEMETRY_SDK_VERSION),
    "SEMRESATTRS_WEBENGINE_DESCRIPTION": (()=>SEMRESATTRS_WEBENGINE_DESCRIPTION),
    "SEMRESATTRS_WEBENGINE_NAME": (()=>SEMRESATTRS_WEBENGINE_NAME),
    "SEMRESATTRS_WEBENGINE_VERSION": (()=>SEMRESATTRS_WEBENGINE_VERSION),
    "SemanticResourceAttributes": (()=>SemanticResourceAttributes),
    "TELEMETRYSDKLANGUAGEVALUES_CPP": (()=>TELEMETRYSDKLANGUAGEVALUES_CPP),
    "TELEMETRYSDKLANGUAGEVALUES_DOTNET": (()=>TELEMETRYSDKLANGUAGEVALUES_DOTNET),
    "TELEMETRYSDKLANGUAGEVALUES_ERLANG": (()=>TELEMETRYSDKLANGUAGEVALUES_ERLANG),
    "TELEMETRYSDKLANGUAGEVALUES_GO": (()=>TELEMETRYSDKLANGUAGEVALUES_GO),
    "TELEMETRYSDKLANGUAGEVALUES_JAVA": (()=>TELEMETRYSDKLANGUAGEVALUES_JAVA),
    "TELEMETRYSDKLANGUAGEVALUES_NODEJS": (()=>TELEMETRYSDKLANGUAGEVALUES_NODEJS),
    "TELEMETRYSDKLANGUAGEVALUES_PHP": (()=>TELEMETRYSDKLANGUAGEVALUES_PHP),
    "TELEMETRYSDKLANGUAGEVALUES_PYTHON": (()=>TELEMETRYSDKLANGUAGEVALUES_PYTHON),
    "TELEMETRYSDKLANGUAGEVALUES_RUBY": (()=>TELEMETRYSDKLANGUAGEVALUES_RUBY),
    "TELEMETRYSDKLANGUAGEVALUES_WEBJS": (()=>TELEMETRYSDKLANGUAGEVALUES_WEBJS),
    "TelemetrySdkLanguageValues": (()=>TelemetrySdkLanguageValues)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/core/node_modules/@opentelemetry/semantic-conventions/build/esm/internal/utils.js [app-ssr] (ecmascript)");
;
//----------------------------------------------------------------------------------------------------------
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
// Constant values for SemanticResourceAttributes
//----------------------------------------------------------------------------------------------------------
// Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_CLOUD_PROVIDER = 'cloud.provider';
var TMP_CLOUD_ACCOUNT_ID = 'cloud.account.id';
var TMP_CLOUD_REGION = 'cloud.region';
var TMP_CLOUD_AVAILABILITY_ZONE = 'cloud.availability_zone';
var TMP_CLOUD_PLATFORM = 'cloud.platform';
var TMP_AWS_ECS_CONTAINER_ARN = 'aws.ecs.container.arn';
var TMP_AWS_ECS_CLUSTER_ARN = 'aws.ecs.cluster.arn';
var TMP_AWS_ECS_LAUNCHTYPE = 'aws.ecs.launchtype';
var TMP_AWS_ECS_TASK_ARN = 'aws.ecs.task.arn';
var TMP_AWS_ECS_TASK_FAMILY = 'aws.ecs.task.family';
var TMP_AWS_ECS_TASK_REVISION = 'aws.ecs.task.revision';
var TMP_AWS_EKS_CLUSTER_ARN = 'aws.eks.cluster.arn';
var TMP_AWS_LOG_GROUP_NAMES = 'aws.log.group.names';
var TMP_AWS_LOG_GROUP_ARNS = 'aws.log.group.arns';
var TMP_AWS_LOG_STREAM_NAMES = 'aws.log.stream.names';
var TMP_AWS_LOG_STREAM_ARNS = 'aws.log.stream.arns';
var TMP_CONTAINER_NAME = 'container.name';
var TMP_CONTAINER_ID = 'container.id';
var TMP_CONTAINER_RUNTIME = 'container.runtime';
var TMP_CONTAINER_IMAGE_NAME = 'container.image.name';
var TMP_CONTAINER_IMAGE_TAG = 'container.image.tag';
var TMP_DEPLOYMENT_ENVIRONMENT = 'deployment.environment';
var TMP_DEVICE_ID = 'device.id';
var TMP_DEVICE_MODEL_IDENTIFIER = 'device.model.identifier';
var TMP_DEVICE_MODEL_NAME = 'device.model.name';
var TMP_FAAS_NAME = 'faas.name';
var TMP_FAAS_ID = 'faas.id';
var TMP_FAAS_VERSION = 'faas.version';
var TMP_FAAS_INSTANCE = 'faas.instance';
var TMP_FAAS_MAX_MEMORY = 'faas.max_memory';
var TMP_HOST_ID = 'host.id';
var TMP_HOST_NAME = 'host.name';
var TMP_HOST_TYPE = 'host.type';
var TMP_HOST_ARCH = 'host.arch';
var TMP_HOST_IMAGE_NAME = 'host.image.name';
var TMP_HOST_IMAGE_ID = 'host.image.id';
var TMP_HOST_IMAGE_VERSION = 'host.image.version';
var TMP_K8S_CLUSTER_NAME = 'k8s.cluster.name';
var TMP_K8S_NODE_NAME = 'k8s.node.name';
var TMP_K8S_NODE_UID = 'k8s.node.uid';
var TMP_K8S_NAMESPACE_NAME = 'k8s.namespace.name';
var TMP_K8S_POD_UID = 'k8s.pod.uid';
var TMP_K8S_POD_NAME = 'k8s.pod.name';
var TMP_K8S_CONTAINER_NAME = 'k8s.container.name';
var TMP_K8S_REPLICASET_UID = 'k8s.replicaset.uid';
var TMP_K8S_REPLICASET_NAME = 'k8s.replicaset.name';
var TMP_K8S_DEPLOYMENT_UID = 'k8s.deployment.uid';
var TMP_K8S_DEPLOYMENT_NAME = 'k8s.deployment.name';
var TMP_K8S_STATEFULSET_UID = 'k8s.statefulset.uid';
var TMP_K8S_STATEFULSET_NAME = 'k8s.statefulset.name';
var TMP_K8S_DAEMONSET_UID = 'k8s.daemonset.uid';
var TMP_K8S_DAEMONSET_NAME = 'k8s.daemonset.name';
var TMP_K8S_JOB_UID = 'k8s.job.uid';
var TMP_K8S_JOB_NAME = 'k8s.job.name';
var TMP_K8S_CRONJOB_UID = 'k8s.cronjob.uid';
var TMP_K8S_CRONJOB_NAME = 'k8s.cronjob.name';
var TMP_OS_TYPE = 'os.type';
var TMP_OS_DESCRIPTION = 'os.description';
var TMP_OS_NAME = 'os.name';
var TMP_OS_VERSION = 'os.version';
var TMP_PROCESS_PID = 'process.pid';
var TMP_PROCESS_EXECUTABLE_NAME = 'process.executable.name';
var TMP_PROCESS_EXECUTABLE_PATH = 'process.executable.path';
var TMP_PROCESS_COMMAND = 'process.command';
var TMP_PROCESS_COMMAND_LINE = 'process.command_line';
var TMP_PROCESS_COMMAND_ARGS = 'process.command_args';
var TMP_PROCESS_OWNER = 'process.owner';
var TMP_PROCESS_RUNTIME_NAME = 'process.runtime.name';
var TMP_PROCESS_RUNTIME_VERSION = 'process.runtime.version';
var TMP_PROCESS_RUNTIME_DESCRIPTION = 'process.runtime.description';
var TMP_SERVICE_NAME = 'service.name';
var TMP_SERVICE_NAMESPACE = 'service.namespace';
var TMP_SERVICE_INSTANCE_ID = 'service.instance.id';
var TMP_SERVICE_VERSION = 'service.version';
var TMP_TELEMETRY_SDK_NAME = 'telemetry.sdk.name';
var TMP_TELEMETRY_SDK_LANGUAGE = 'telemetry.sdk.language';
var TMP_TELEMETRY_SDK_VERSION = 'telemetry.sdk.version';
var TMP_TELEMETRY_AUTO_VERSION = 'telemetry.auto.version';
var TMP_WEBENGINE_NAME = 'webengine.name';
var TMP_WEBENGINE_VERSION = 'webengine.version';
var TMP_WEBENGINE_DESCRIPTION = 'webengine.description';
var SEMRESATTRS_CLOUD_PROVIDER = TMP_CLOUD_PROVIDER;
var SEMRESATTRS_CLOUD_ACCOUNT_ID = TMP_CLOUD_ACCOUNT_ID;
var SEMRESATTRS_CLOUD_REGION = TMP_CLOUD_REGION;
var SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = TMP_CLOUD_AVAILABILITY_ZONE;
var SEMRESATTRS_CLOUD_PLATFORM = TMP_CLOUD_PLATFORM;
var SEMRESATTRS_AWS_ECS_CONTAINER_ARN = TMP_AWS_ECS_CONTAINER_ARN;
var SEMRESATTRS_AWS_ECS_CLUSTER_ARN = TMP_AWS_ECS_CLUSTER_ARN;
var SEMRESATTRS_AWS_ECS_LAUNCHTYPE = TMP_AWS_ECS_LAUNCHTYPE;
var SEMRESATTRS_AWS_ECS_TASK_ARN = TMP_AWS_ECS_TASK_ARN;
var SEMRESATTRS_AWS_ECS_TASK_FAMILY = TMP_AWS_ECS_TASK_FAMILY;
var SEMRESATTRS_AWS_ECS_TASK_REVISION = TMP_AWS_ECS_TASK_REVISION;
var SEMRESATTRS_AWS_EKS_CLUSTER_ARN = TMP_AWS_EKS_CLUSTER_ARN;
var SEMRESATTRS_AWS_LOG_GROUP_NAMES = TMP_AWS_LOG_GROUP_NAMES;
var SEMRESATTRS_AWS_LOG_GROUP_ARNS = TMP_AWS_LOG_GROUP_ARNS;
var SEMRESATTRS_AWS_LOG_STREAM_NAMES = TMP_AWS_LOG_STREAM_NAMES;
var SEMRESATTRS_AWS_LOG_STREAM_ARNS = TMP_AWS_LOG_STREAM_ARNS;
var SEMRESATTRS_CONTAINER_NAME = TMP_CONTAINER_NAME;
var SEMRESATTRS_CONTAINER_ID = TMP_CONTAINER_ID;
var SEMRESATTRS_CONTAINER_RUNTIME = TMP_CONTAINER_RUNTIME;
var SEMRESATTRS_CONTAINER_IMAGE_NAME = TMP_CONTAINER_IMAGE_NAME;
var SEMRESATTRS_CONTAINER_IMAGE_TAG = TMP_CONTAINER_IMAGE_TAG;
var SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = TMP_DEPLOYMENT_ENVIRONMENT;
var SEMRESATTRS_DEVICE_ID = TMP_DEVICE_ID;
var SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = TMP_DEVICE_MODEL_IDENTIFIER;
var SEMRESATTRS_DEVICE_MODEL_NAME = TMP_DEVICE_MODEL_NAME;
var SEMRESATTRS_FAAS_NAME = TMP_FAAS_NAME;
var SEMRESATTRS_FAAS_ID = TMP_FAAS_ID;
var SEMRESATTRS_FAAS_VERSION = TMP_FAAS_VERSION;
var SEMRESATTRS_FAAS_INSTANCE = TMP_FAAS_INSTANCE;
var SEMRESATTRS_FAAS_MAX_MEMORY = TMP_FAAS_MAX_MEMORY;
var SEMRESATTRS_HOST_ID = TMP_HOST_ID;
var SEMRESATTRS_HOST_NAME = TMP_HOST_NAME;
var SEMRESATTRS_HOST_TYPE = TMP_HOST_TYPE;
var SEMRESATTRS_HOST_ARCH = TMP_HOST_ARCH;
var SEMRESATTRS_HOST_IMAGE_NAME = TMP_HOST_IMAGE_NAME;
var SEMRESATTRS_HOST_IMAGE_ID = TMP_HOST_IMAGE_ID;
var SEMRESATTRS_HOST_IMAGE_VERSION = TMP_HOST_IMAGE_VERSION;
var SEMRESATTRS_K8S_CLUSTER_NAME = TMP_K8S_CLUSTER_NAME;
var SEMRESATTRS_K8S_NODE_NAME = TMP_K8S_NODE_NAME;
var SEMRESATTRS_K8S_NODE_UID = TMP_K8S_NODE_UID;
var SEMRESATTRS_K8S_NAMESPACE_NAME = TMP_K8S_NAMESPACE_NAME;
var SEMRESATTRS_K8S_POD_UID = TMP_K8S_POD_UID;
var SEMRESATTRS_K8S_POD_NAME = TMP_K8S_POD_NAME;
var SEMRESATTRS_K8S_CONTAINER_NAME = TMP_K8S_CONTAINER_NAME;
var SEMRESATTRS_K8S_REPLICASET_UID = TMP_K8S_REPLICASET_UID;
var SEMRESATTRS_K8S_REPLICASET_NAME = TMP_K8S_REPLICASET_NAME;
var SEMRESATTRS_K8S_DEPLOYMENT_UID = TMP_K8S_DEPLOYMENT_UID;
var SEMRESATTRS_K8S_DEPLOYMENT_NAME = TMP_K8S_DEPLOYMENT_NAME;
var SEMRESATTRS_K8S_STATEFULSET_UID = TMP_K8S_STATEFULSET_UID;
var SEMRESATTRS_K8S_STATEFULSET_NAME = TMP_K8S_STATEFULSET_NAME;
var SEMRESATTRS_K8S_DAEMONSET_UID = TMP_K8S_DAEMONSET_UID;
var SEMRESATTRS_K8S_DAEMONSET_NAME = TMP_K8S_DAEMONSET_NAME;
var SEMRESATTRS_K8S_JOB_UID = TMP_K8S_JOB_UID;
var SEMRESATTRS_K8S_JOB_NAME = TMP_K8S_JOB_NAME;
var SEMRESATTRS_K8S_CRONJOB_UID = TMP_K8S_CRONJOB_UID;
var SEMRESATTRS_K8S_CRONJOB_NAME = TMP_K8S_CRONJOB_NAME;
var SEMRESATTRS_OS_TYPE = TMP_OS_TYPE;
var SEMRESATTRS_OS_DESCRIPTION = TMP_OS_DESCRIPTION;
var SEMRESATTRS_OS_NAME = TMP_OS_NAME;
var SEMRESATTRS_OS_VERSION = TMP_OS_VERSION;
var SEMRESATTRS_PROCESS_PID = TMP_PROCESS_PID;
var SEMRESATTRS_PROCESS_EXECUTABLE_NAME = TMP_PROCESS_EXECUTABLE_NAME;
var SEMRESATTRS_PROCESS_EXECUTABLE_PATH = TMP_PROCESS_EXECUTABLE_PATH;
var SEMRESATTRS_PROCESS_COMMAND = TMP_PROCESS_COMMAND;
var SEMRESATTRS_PROCESS_COMMAND_LINE = TMP_PROCESS_COMMAND_LINE;
var SEMRESATTRS_PROCESS_COMMAND_ARGS = TMP_PROCESS_COMMAND_ARGS;
var SEMRESATTRS_PROCESS_OWNER = TMP_PROCESS_OWNER;
var SEMRESATTRS_PROCESS_RUNTIME_NAME = TMP_PROCESS_RUNTIME_NAME;
var SEMRESATTRS_PROCESS_RUNTIME_VERSION = TMP_PROCESS_RUNTIME_VERSION;
var SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = TMP_PROCESS_RUNTIME_DESCRIPTION;
var SEMRESATTRS_SERVICE_NAME = TMP_SERVICE_NAME;
var SEMRESATTRS_SERVICE_NAMESPACE = TMP_SERVICE_NAMESPACE;
var SEMRESATTRS_SERVICE_INSTANCE_ID = TMP_SERVICE_INSTANCE_ID;
var SEMRESATTRS_SERVICE_VERSION = TMP_SERVICE_VERSION;
var SEMRESATTRS_TELEMETRY_SDK_NAME = TMP_TELEMETRY_SDK_NAME;
var SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = TMP_TELEMETRY_SDK_LANGUAGE;
var SEMRESATTRS_TELEMETRY_SDK_VERSION = TMP_TELEMETRY_SDK_VERSION;
var SEMRESATTRS_TELEMETRY_AUTO_VERSION = TMP_TELEMETRY_AUTO_VERSION;
var SEMRESATTRS_WEBENGINE_NAME = TMP_WEBENGINE_NAME;
var SEMRESATTRS_WEBENGINE_VERSION = TMP_WEBENGINE_VERSION;
var SEMRESATTRS_WEBENGINE_DESCRIPTION = TMP_WEBENGINE_DESCRIPTION;
var SemanticResourceAttributes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_CLOUD_PROVIDER,
    TMP_CLOUD_ACCOUNT_ID,
    TMP_CLOUD_REGION,
    TMP_CLOUD_AVAILABILITY_ZONE,
    TMP_CLOUD_PLATFORM,
    TMP_AWS_ECS_CONTAINER_ARN,
    TMP_AWS_ECS_CLUSTER_ARN,
    TMP_AWS_ECS_LAUNCHTYPE,
    TMP_AWS_ECS_TASK_ARN,
    TMP_AWS_ECS_TASK_FAMILY,
    TMP_AWS_ECS_TASK_REVISION,
    TMP_AWS_EKS_CLUSTER_ARN,
    TMP_AWS_LOG_GROUP_NAMES,
    TMP_AWS_LOG_GROUP_ARNS,
    TMP_AWS_LOG_STREAM_NAMES,
    TMP_AWS_LOG_STREAM_ARNS,
    TMP_CONTAINER_NAME,
    TMP_CONTAINER_ID,
    TMP_CONTAINER_RUNTIME,
    TMP_CONTAINER_IMAGE_NAME,
    TMP_CONTAINER_IMAGE_TAG,
    TMP_DEPLOYMENT_ENVIRONMENT,
    TMP_DEVICE_ID,
    TMP_DEVICE_MODEL_IDENTIFIER,
    TMP_DEVICE_MODEL_NAME,
    TMP_FAAS_NAME,
    TMP_FAAS_ID,
    TMP_FAAS_VERSION,
    TMP_FAAS_INSTANCE,
    TMP_FAAS_MAX_MEMORY,
    TMP_HOST_ID,
    TMP_HOST_NAME,
    TMP_HOST_TYPE,
    TMP_HOST_ARCH,
    TMP_HOST_IMAGE_NAME,
    TMP_HOST_IMAGE_ID,
    TMP_HOST_IMAGE_VERSION,
    TMP_K8S_CLUSTER_NAME,
    TMP_K8S_NODE_NAME,
    TMP_K8S_NODE_UID,
    TMP_K8S_NAMESPACE_NAME,
    TMP_K8S_POD_UID,
    TMP_K8S_POD_NAME,
    TMP_K8S_CONTAINER_NAME,
    TMP_K8S_REPLICASET_UID,
    TMP_K8S_REPLICASET_NAME,
    TMP_K8S_DEPLOYMENT_UID,
    TMP_K8S_DEPLOYMENT_NAME,
    TMP_K8S_STATEFULSET_UID,
    TMP_K8S_STATEFULSET_NAME,
    TMP_K8S_DAEMONSET_UID,
    TMP_K8S_DAEMONSET_NAME,
    TMP_K8S_JOB_UID,
    TMP_K8S_JOB_NAME,
    TMP_K8S_CRONJOB_UID,
    TMP_K8S_CRONJOB_NAME,
    TMP_OS_TYPE,
    TMP_OS_DESCRIPTION,
    TMP_OS_NAME,
    TMP_OS_VERSION,
    TMP_PROCESS_PID,
    TMP_PROCESS_EXECUTABLE_NAME,
    TMP_PROCESS_EXECUTABLE_PATH,
    TMP_PROCESS_COMMAND,
    TMP_PROCESS_COMMAND_LINE,
    TMP_PROCESS_COMMAND_ARGS,
    TMP_PROCESS_OWNER,
    TMP_PROCESS_RUNTIME_NAME,
    TMP_PROCESS_RUNTIME_VERSION,
    TMP_PROCESS_RUNTIME_DESCRIPTION,
    TMP_SERVICE_NAME,
    TMP_SERVICE_NAMESPACE,
    TMP_SERVICE_INSTANCE_ID,
    TMP_SERVICE_VERSION,
    TMP_TELEMETRY_SDK_NAME,
    TMP_TELEMETRY_SDK_LANGUAGE,
    TMP_TELEMETRY_SDK_VERSION,
    TMP_TELEMETRY_AUTO_VERSION,
    TMP_WEBENGINE_NAME,
    TMP_WEBENGINE_VERSION,
    TMP_WEBENGINE_DESCRIPTION
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for CloudProviderValues enum definition
 *
 * Name of the cloud provider.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD = 'alibaba_cloud';
var TMP_CLOUDPROVIDERVALUES_AWS = 'aws';
var TMP_CLOUDPROVIDERVALUES_AZURE = 'azure';
var TMP_CLOUDPROVIDERVALUES_GCP = 'gcp';
var CLOUDPROVIDERVALUES_ALIBABA_CLOUD = TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD;
var CLOUDPROVIDERVALUES_AWS = TMP_CLOUDPROVIDERVALUES_AWS;
var CLOUDPROVIDERVALUES_AZURE = TMP_CLOUDPROVIDERVALUES_AZURE;
var CLOUDPROVIDERVALUES_GCP = TMP_CLOUDPROVIDERVALUES_GCP;
var CloudProviderValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD,
    TMP_CLOUDPROVIDERVALUES_AWS,
    TMP_CLOUDPROVIDERVALUES_AZURE,
    TMP_CLOUDPROVIDERVALUES_GCP
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for CloudPlatformValues enum definition
 *
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = 'alibaba_cloud_ecs';
var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = 'alibaba_cloud_fc';
var TMP_CLOUDPLATFORMVALUES_AWS_EC2 = 'aws_ec2';
var TMP_CLOUDPLATFORMVALUES_AWS_ECS = 'aws_ecs';
var TMP_CLOUDPLATFORMVALUES_AWS_EKS = 'aws_eks';
var TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA = 'aws_lambda';
var TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = 'aws_elastic_beanstalk';
var TMP_CLOUDPLATFORMVALUES_AZURE_VM = 'azure_vm';
var TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = 'azure_container_instances';
var TMP_CLOUDPLATFORMVALUES_AZURE_AKS = 'azure_aks';
var TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = 'azure_functions';
var TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = 'azure_app_service';
var TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = 'gcp_compute_engine';
var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = 'gcp_cloud_run';
var TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = 'gcp_kubernetes_engine';
var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = 'gcp_cloud_functions';
var TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE = 'gcp_app_engine';
var CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS;
var CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC;
var CLOUDPLATFORMVALUES_AWS_EC2 = TMP_CLOUDPLATFORMVALUES_AWS_EC2;
var CLOUDPLATFORMVALUES_AWS_ECS = TMP_CLOUDPLATFORMVALUES_AWS_ECS;
var CLOUDPLATFORMVALUES_AWS_EKS = TMP_CLOUDPLATFORMVALUES_AWS_EKS;
var CLOUDPLATFORMVALUES_AWS_LAMBDA = TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA;
var CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK;
var CLOUDPLATFORMVALUES_AZURE_VM = TMP_CLOUDPLATFORMVALUES_AZURE_VM;
var CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES;
var CLOUDPLATFORMVALUES_AZURE_AKS = TMP_CLOUDPLATFORMVALUES_AZURE_AKS;
var CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS;
var CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE;
var CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE;
var CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN;
var CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE;
var CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS;
var CLOUDPLATFORMVALUES_GCP_APP_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE;
var CloudPlatformValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS,
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC,
    TMP_CLOUDPLATFORMVALUES_AWS_EC2,
    TMP_CLOUDPLATFORMVALUES_AWS_ECS,
    TMP_CLOUDPLATFORMVALUES_AWS_EKS,
    TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA,
    TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK,
    TMP_CLOUDPLATFORMVALUES_AZURE_VM,
    TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES,
    TMP_CLOUDPLATFORMVALUES_AZURE_AKS,
    TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE,
    TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN,
    TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for AwsEcsLaunchtypeValues enum definition
 *
 * The [launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) for an ECS task.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_AWSECSLAUNCHTYPEVALUES_EC2 = 'ec2';
var TMP_AWSECSLAUNCHTYPEVALUES_FARGATE = 'fargate';
var AWSECSLAUNCHTYPEVALUES_EC2 = TMP_AWSECSLAUNCHTYPEVALUES_EC2;
var AWSECSLAUNCHTYPEVALUES_FARGATE = TMP_AWSECSLAUNCHTYPEVALUES_FARGATE;
var AwsEcsLaunchtypeValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_AWSECSLAUNCHTYPEVALUES_EC2,
    TMP_AWSECSLAUNCHTYPEVALUES_FARGATE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for HostArchValues enum definition
 *
 * The CPU architecture the host system is running on.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_HOSTARCHVALUES_AMD64 = 'amd64';
var TMP_HOSTARCHVALUES_ARM32 = 'arm32';
var TMP_HOSTARCHVALUES_ARM64 = 'arm64';
var TMP_HOSTARCHVALUES_IA64 = 'ia64';
var TMP_HOSTARCHVALUES_PPC32 = 'ppc32';
var TMP_HOSTARCHVALUES_PPC64 = 'ppc64';
var TMP_HOSTARCHVALUES_X86 = 'x86';
var HOSTARCHVALUES_AMD64 = TMP_HOSTARCHVALUES_AMD64;
var HOSTARCHVALUES_ARM32 = TMP_HOSTARCHVALUES_ARM32;
var HOSTARCHVALUES_ARM64 = TMP_HOSTARCHVALUES_ARM64;
var HOSTARCHVALUES_IA64 = TMP_HOSTARCHVALUES_IA64;
var HOSTARCHVALUES_PPC32 = TMP_HOSTARCHVALUES_PPC32;
var HOSTARCHVALUES_PPC64 = TMP_HOSTARCHVALUES_PPC64;
var HOSTARCHVALUES_X86 = TMP_HOSTARCHVALUES_X86;
var HostArchValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_HOSTARCHVALUES_AMD64,
    TMP_HOSTARCHVALUES_ARM32,
    TMP_HOSTARCHVALUES_ARM64,
    TMP_HOSTARCHVALUES_IA64,
    TMP_HOSTARCHVALUES_PPC32,
    TMP_HOSTARCHVALUES_PPC64,
    TMP_HOSTARCHVALUES_X86
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for OsTypeValues enum definition
 *
 * The operating system type.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_OSTYPEVALUES_WINDOWS = 'windows';
var TMP_OSTYPEVALUES_LINUX = 'linux';
var TMP_OSTYPEVALUES_DARWIN = 'darwin';
var TMP_OSTYPEVALUES_FREEBSD = 'freebsd';
var TMP_OSTYPEVALUES_NETBSD = 'netbsd';
var TMP_OSTYPEVALUES_OPENBSD = 'openbsd';
var TMP_OSTYPEVALUES_DRAGONFLYBSD = 'dragonflybsd';
var TMP_OSTYPEVALUES_HPUX = 'hpux';
var TMP_OSTYPEVALUES_AIX = 'aix';
var TMP_OSTYPEVALUES_SOLARIS = 'solaris';
var TMP_OSTYPEVALUES_Z_OS = 'z_os';
var OSTYPEVALUES_WINDOWS = TMP_OSTYPEVALUES_WINDOWS;
var OSTYPEVALUES_LINUX = TMP_OSTYPEVALUES_LINUX;
var OSTYPEVALUES_DARWIN = TMP_OSTYPEVALUES_DARWIN;
var OSTYPEVALUES_FREEBSD = TMP_OSTYPEVALUES_FREEBSD;
var OSTYPEVALUES_NETBSD = TMP_OSTYPEVALUES_NETBSD;
var OSTYPEVALUES_OPENBSD = TMP_OSTYPEVALUES_OPENBSD;
var OSTYPEVALUES_DRAGONFLYBSD = TMP_OSTYPEVALUES_DRAGONFLYBSD;
var OSTYPEVALUES_HPUX = TMP_OSTYPEVALUES_HPUX;
var OSTYPEVALUES_AIX = TMP_OSTYPEVALUES_AIX;
var OSTYPEVALUES_SOLARIS = TMP_OSTYPEVALUES_SOLARIS;
var OSTYPEVALUES_Z_OS = TMP_OSTYPEVALUES_Z_OS;
var OsTypeValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_OSTYPEVALUES_WINDOWS,
    TMP_OSTYPEVALUES_LINUX,
    TMP_OSTYPEVALUES_DARWIN,
    TMP_OSTYPEVALUES_FREEBSD,
    TMP_OSTYPEVALUES_NETBSD,
    TMP_OSTYPEVALUES_OPENBSD,
    TMP_OSTYPEVALUES_DRAGONFLYBSD,
    TMP_OSTYPEVALUES_HPUX,
    TMP_OSTYPEVALUES_AIX,
    TMP_OSTYPEVALUES_SOLARIS,
    TMP_OSTYPEVALUES_Z_OS
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for TelemetrySdkLanguageValues enum definition
 *
 * The language of the telemetry SDK.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_TELEMETRYSDKLANGUAGEVALUES_CPP = 'cpp';
var TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET = 'dotnet';
var TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG = 'erlang';
var TMP_TELEMETRYSDKLANGUAGEVALUES_GO = 'go';
var TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA = 'java';
var TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS = 'nodejs';
var TMP_TELEMETRYSDKLANGUAGEVALUES_PHP = 'php';
var TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON = 'python';
var TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY = 'ruby';
var TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS = 'webjs';
var TELEMETRYSDKLANGUAGEVALUES_CPP = TMP_TELEMETRYSDKLANGUAGEVALUES_CPP;
var TELEMETRYSDKLANGUAGEVALUES_DOTNET = TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET;
var TELEMETRYSDKLANGUAGEVALUES_ERLANG = TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG;
var TELEMETRYSDKLANGUAGEVALUES_GO = TMP_TELEMETRYSDKLANGUAGEVALUES_GO;
var TELEMETRYSDKLANGUAGEVALUES_JAVA = TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA;
var TELEMETRYSDKLANGUAGEVALUES_NODEJS = TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS;
var TELEMETRYSDKLANGUAGEVALUES_PHP = TMP_TELEMETRYSDKLANGUAGEVALUES_PHP;
var TELEMETRYSDKLANGUAGEVALUES_PYTHON = TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON;
var TELEMETRYSDKLANGUAGEVALUES_RUBY = TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY;
var TELEMETRYSDKLANGUAGEVALUES_WEBJS = TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS;
var TelemetrySdkLanguageValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_TELEMETRYSDKLANGUAGEVALUES_CPP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET,
    TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG,
    TMP_TELEMETRYSDKLANGUAGEVALUES_GO,
    TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA,
    TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PHP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON,
    TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY,
    TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS
]); //# sourceMappingURL=SemanticResourceAttributes.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/esm/internal/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Creates a const map from the given values
 * @param values - An array of values to be used as keys and values in the map.
 * @returns A populated version of the map with the values and keys derived from the values.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s({
    "createConstMap": (()=>createConstMap)
});
function createConstMap(values) {
    // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
    var res = {};
    var len = values.length;
    for(var lp = 0; lp < len; lp++){
        var val = values[lp];
        if (val) {
            res[String(val).toUpperCase().replace(/[-.]/g, '_')] = val;
        }
    }
    return res;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "AWSECSLAUNCHTYPEVALUES_EC2": (()=>AWSECSLAUNCHTYPEVALUES_EC2),
    "AWSECSLAUNCHTYPEVALUES_FARGATE": (()=>AWSECSLAUNCHTYPEVALUES_FARGATE),
    "AwsEcsLaunchtypeValues": (()=>AwsEcsLaunchtypeValues),
    "CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS": (()=>CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS),
    "CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC": (()=>CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC),
    "CLOUDPLATFORMVALUES_AWS_EC2": (()=>CLOUDPLATFORMVALUES_AWS_EC2),
    "CLOUDPLATFORMVALUES_AWS_ECS": (()=>CLOUDPLATFORMVALUES_AWS_ECS),
    "CLOUDPLATFORMVALUES_AWS_EKS": (()=>CLOUDPLATFORMVALUES_AWS_EKS),
    "CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK": (()=>CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK),
    "CLOUDPLATFORMVALUES_AWS_LAMBDA": (()=>CLOUDPLATFORMVALUES_AWS_LAMBDA),
    "CLOUDPLATFORMVALUES_AZURE_AKS": (()=>CLOUDPLATFORMVALUES_AZURE_AKS),
    "CLOUDPLATFORMVALUES_AZURE_APP_SERVICE": (()=>CLOUDPLATFORMVALUES_AZURE_APP_SERVICE),
    "CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES": (()=>CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES),
    "CLOUDPLATFORMVALUES_AZURE_FUNCTIONS": (()=>CLOUDPLATFORMVALUES_AZURE_FUNCTIONS),
    "CLOUDPLATFORMVALUES_AZURE_VM": (()=>CLOUDPLATFORMVALUES_AZURE_VM),
    "CLOUDPLATFORMVALUES_GCP_APP_ENGINE": (()=>CLOUDPLATFORMVALUES_GCP_APP_ENGINE),
    "CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS": (()=>CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS),
    "CLOUDPLATFORMVALUES_GCP_CLOUD_RUN": (()=>CLOUDPLATFORMVALUES_GCP_CLOUD_RUN),
    "CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE": (()=>CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE),
    "CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE": (()=>CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE),
    "CLOUDPROVIDERVALUES_ALIBABA_CLOUD": (()=>CLOUDPROVIDERVALUES_ALIBABA_CLOUD),
    "CLOUDPROVIDERVALUES_AWS": (()=>CLOUDPROVIDERVALUES_AWS),
    "CLOUDPROVIDERVALUES_AZURE": (()=>CLOUDPROVIDERVALUES_AZURE),
    "CLOUDPROVIDERVALUES_GCP": (()=>CLOUDPROVIDERVALUES_GCP),
    "CloudPlatformValues": (()=>CloudPlatformValues),
    "CloudProviderValues": (()=>CloudProviderValues),
    "HOSTARCHVALUES_AMD64": (()=>HOSTARCHVALUES_AMD64),
    "HOSTARCHVALUES_ARM32": (()=>HOSTARCHVALUES_ARM32),
    "HOSTARCHVALUES_ARM64": (()=>HOSTARCHVALUES_ARM64),
    "HOSTARCHVALUES_IA64": (()=>HOSTARCHVALUES_IA64),
    "HOSTARCHVALUES_PPC32": (()=>HOSTARCHVALUES_PPC32),
    "HOSTARCHVALUES_PPC64": (()=>HOSTARCHVALUES_PPC64),
    "HOSTARCHVALUES_X86": (()=>HOSTARCHVALUES_X86),
    "HostArchValues": (()=>HostArchValues),
    "OSTYPEVALUES_AIX": (()=>OSTYPEVALUES_AIX),
    "OSTYPEVALUES_DARWIN": (()=>OSTYPEVALUES_DARWIN),
    "OSTYPEVALUES_DRAGONFLYBSD": (()=>OSTYPEVALUES_DRAGONFLYBSD),
    "OSTYPEVALUES_FREEBSD": (()=>OSTYPEVALUES_FREEBSD),
    "OSTYPEVALUES_HPUX": (()=>OSTYPEVALUES_HPUX),
    "OSTYPEVALUES_LINUX": (()=>OSTYPEVALUES_LINUX),
    "OSTYPEVALUES_NETBSD": (()=>OSTYPEVALUES_NETBSD),
    "OSTYPEVALUES_OPENBSD": (()=>OSTYPEVALUES_OPENBSD),
    "OSTYPEVALUES_SOLARIS": (()=>OSTYPEVALUES_SOLARIS),
    "OSTYPEVALUES_WINDOWS": (()=>OSTYPEVALUES_WINDOWS),
    "OSTYPEVALUES_Z_OS": (()=>OSTYPEVALUES_Z_OS),
    "OsTypeValues": (()=>OsTypeValues),
    "SEMRESATTRS_AWS_ECS_CLUSTER_ARN": (()=>SEMRESATTRS_AWS_ECS_CLUSTER_ARN),
    "SEMRESATTRS_AWS_ECS_CONTAINER_ARN": (()=>SEMRESATTRS_AWS_ECS_CONTAINER_ARN),
    "SEMRESATTRS_AWS_ECS_LAUNCHTYPE": (()=>SEMRESATTRS_AWS_ECS_LAUNCHTYPE),
    "SEMRESATTRS_AWS_ECS_TASK_ARN": (()=>SEMRESATTRS_AWS_ECS_TASK_ARN),
    "SEMRESATTRS_AWS_ECS_TASK_FAMILY": (()=>SEMRESATTRS_AWS_ECS_TASK_FAMILY),
    "SEMRESATTRS_AWS_ECS_TASK_REVISION": (()=>SEMRESATTRS_AWS_ECS_TASK_REVISION),
    "SEMRESATTRS_AWS_EKS_CLUSTER_ARN": (()=>SEMRESATTRS_AWS_EKS_CLUSTER_ARN),
    "SEMRESATTRS_AWS_LOG_GROUP_ARNS": (()=>SEMRESATTRS_AWS_LOG_GROUP_ARNS),
    "SEMRESATTRS_AWS_LOG_GROUP_NAMES": (()=>SEMRESATTRS_AWS_LOG_GROUP_NAMES),
    "SEMRESATTRS_AWS_LOG_STREAM_ARNS": (()=>SEMRESATTRS_AWS_LOG_STREAM_ARNS),
    "SEMRESATTRS_AWS_LOG_STREAM_NAMES": (()=>SEMRESATTRS_AWS_LOG_STREAM_NAMES),
    "SEMRESATTRS_CLOUD_ACCOUNT_ID": (()=>SEMRESATTRS_CLOUD_ACCOUNT_ID),
    "SEMRESATTRS_CLOUD_AVAILABILITY_ZONE": (()=>SEMRESATTRS_CLOUD_AVAILABILITY_ZONE),
    "SEMRESATTRS_CLOUD_PLATFORM": (()=>SEMRESATTRS_CLOUD_PLATFORM),
    "SEMRESATTRS_CLOUD_PROVIDER": (()=>SEMRESATTRS_CLOUD_PROVIDER),
    "SEMRESATTRS_CLOUD_REGION": (()=>SEMRESATTRS_CLOUD_REGION),
    "SEMRESATTRS_CONTAINER_ID": (()=>SEMRESATTRS_CONTAINER_ID),
    "SEMRESATTRS_CONTAINER_IMAGE_NAME": (()=>SEMRESATTRS_CONTAINER_IMAGE_NAME),
    "SEMRESATTRS_CONTAINER_IMAGE_TAG": (()=>SEMRESATTRS_CONTAINER_IMAGE_TAG),
    "SEMRESATTRS_CONTAINER_NAME": (()=>SEMRESATTRS_CONTAINER_NAME),
    "SEMRESATTRS_CONTAINER_RUNTIME": (()=>SEMRESATTRS_CONTAINER_RUNTIME),
    "SEMRESATTRS_DEPLOYMENT_ENVIRONMENT": (()=>SEMRESATTRS_DEPLOYMENT_ENVIRONMENT),
    "SEMRESATTRS_DEVICE_ID": (()=>SEMRESATTRS_DEVICE_ID),
    "SEMRESATTRS_DEVICE_MODEL_IDENTIFIER": (()=>SEMRESATTRS_DEVICE_MODEL_IDENTIFIER),
    "SEMRESATTRS_DEVICE_MODEL_NAME": (()=>SEMRESATTRS_DEVICE_MODEL_NAME),
    "SEMRESATTRS_FAAS_ID": (()=>SEMRESATTRS_FAAS_ID),
    "SEMRESATTRS_FAAS_INSTANCE": (()=>SEMRESATTRS_FAAS_INSTANCE),
    "SEMRESATTRS_FAAS_MAX_MEMORY": (()=>SEMRESATTRS_FAAS_MAX_MEMORY),
    "SEMRESATTRS_FAAS_NAME": (()=>SEMRESATTRS_FAAS_NAME),
    "SEMRESATTRS_FAAS_VERSION": (()=>SEMRESATTRS_FAAS_VERSION),
    "SEMRESATTRS_HOST_ARCH": (()=>SEMRESATTRS_HOST_ARCH),
    "SEMRESATTRS_HOST_ID": (()=>SEMRESATTRS_HOST_ID),
    "SEMRESATTRS_HOST_IMAGE_ID": (()=>SEMRESATTRS_HOST_IMAGE_ID),
    "SEMRESATTRS_HOST_IMAGE_NAME": (()=>SEMRESATTRS_HOST_IMAGE_NAME),
    "SEMRESATTRS_HOST_IMAGE_VERSION": (()=>SEMRESATTRS_HOST_IMAGE_VERSION),
    "SEMRESATTRS_HOST_NAME": (()=>SEMRESATTRS_HOST_NAME),
    "SEMRESATTRS_HOST_TYPE": (()=>SEMRESATTRS_HOST_TYPE),
    "SEMRESATTRS_K8S_CLUSTER_NAME": (()=>SEMRESATTRS_K8S_CLUSTER_NAME),
    "SEMRESATTRS_K8S_CONTAINER_NAME": (()=>SEMRESATTRS_K8S_CONTAINER_NAME),
    "SEMRESATTRS_K8S_CRONJOB_NAME": (()=>SEMRESATTRS_K8S_CRONJOB_NAME),
    "SEMRESATTRS_K8S_CRONJOB_UID": (()=>SEMRESATTRS_K8S_CRONJOB_UID),
    "SEMRESATTRS_K8S_DAEMONSET_NAME": (()=>SEMRESATTRS_K8S_DAEMONSET_NAME),
    "SEMRESATTRS_K8S_DAEMONSET_UID": (()=>SEMRESATTRS_K8S_DAEMONSET_UID),
    "SEMRESATTRS_K8S_DEPLOYMENT_NAME": (()=>SEMRESATTRS_K8S_DEPLOYMENT_NAME),
    "SEMRESATTRS_K8S_DEPLOYMENT_UID": (()=>SEMRESATTRS_K8S_DEPLOYMENT_UID),
    "SEMRESATTRS_K8S_JOB_NAME": (()=>SEMRESATTRS_K8S_JOB_NAME),
    "SEMRESATTRS_K8S_JOB_UID": (()=>SEMRESATTRS_K8S_JOB_UID),
    "SEMRESATTRS_K8S_NAMESPACE_NAME": (()=>SEMRESATTRS_K8S_NAMESPACE_NAME),
    "SEMRESATTRS_K8S_NODE_NAME": (()=>SEMRESATTRS_K8S_NODE_NAME),
    "SEMRESATTRS_K8S_NODE_UID": (()=>SEMRESATTRS_K8S_NODE_UID),
    "SEMRESATTRS_K8S_POD_NAME": (()=>SEMRESATTRS_K8S_POD_NAME),
    "SEMRESATTRS_K8S_POD_UID": (()=>SEMRESATTRS_K8S_POD_UID),
    "SEMRESATTRS_K8S_REPLICASET_NAME": (()=>SEMRESATTRS_K8S_REPLICASET_NAME),
    "SEMRESATTRS_K8S_REPLICASET_UID": (()=>SEMRESATTRS_K8S_REPLICASET_UID),
    "SEMRESATTRS_K8S_STATEFULSET_NAME": (()=>SEMRESATTRS_K8S_STATEFULSET_NAME),
    "SEMRESATTRS_K8S_STATEFULSET_UID": (()=>SEMRESATTRS_K8S_STATEFULSET_UID),
    "SEMRESATTRS_OS_DESCRIPTION": (()=>SEMRESATTRS_OS_DESCRIPTION),
    "SEMRESATTRS_OS_NAME": (()=>SEMRESATTRS_OS_NAME),
    "SEMRESATTRS_OS_TYPE": (()=>SEMRESATTRS_OS_TYPE),
    "SEMRESATTRS_OS_VERSION": (()=>SEMRESATTRS_OS_VERSION),
    "SEMRESATTRS_PROCESS_COMMAND": (()=>SEMRESATTRS_PROCESS_COMMAND),
    "SEMRESATTRS_PROCESS_COMMAND_ARGS": (()=>SEMRESATTRS_PROCESS_COMMAND_ARGS),
    "SEMRESATTRS_PROCESS_COMMAND_LINE": (()=>SEMRESATTRS_PROCESS_COMMAND_LINE),
    "SEMRESATTRS_PROCESS_EXECUTABLE_NAME": (()=>SEMRESATTRS_PROCESS_EXECUTABLE_NAME),
    "SEMRESATTRS_PROCESS_EXECUTABLE_PATH": (()=>SEMRESATTRS_PROCESS_EXECUTABLE_PATH),
    "SEMRESATTRS_PROCESS_OWNER": (()=>SEMRESATTRS_PROCESS_OWNER),
    "SEMRESATTRS_PROCESS_PID": (()=>SEMRESATTRS_PROCESS_PID),
    "SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION": (()=>SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION),
    "SEMRESATTRS_PROCESS_RUNTIME_NAME": (()=>SEMRESATTRS_PROCESS_RUNTIME_NAME),
    "SEMRESATTRS_PROCESS_RUNTIME_VERSION": (()=>SEMRESATTRS_PROCESS_RUNTIME_VERSION),
    "SEMRESATTRS_SERVICE_INSTANCE_ID": (()=>SEMRESATTRS_SERVICE_INSTANCE_ID),
    "SEMRESATTRS_SERVICE_NAME": (()=>SEMRESATTRS_SERVICE_NAME),
    "SEMRESATTRS_SERVICE_NAMESPACE": (()=>SEMRESATTRS_SERVICE_NAMESPACE),
    "SEMRESATTRS_SERVICE_VERSION": (()=>SEMRESATTRS_SERVICE_VERSION),
    "SEMRESATTRS_TELEMETRY_AUTO_VERSION": (()=>SEMRESATTRS_TELEMETRY_AUTO_VERSION),
    "SEMRESATTRS_TELEMETRY_SDK_LANGUAGE": (()=>SEMRESATTRS_TELEMETRY_SDK_LANGUAGE),
    "SEMRESATTRS_TELEMETRY_SDK_NAME": (()=>SEMRESATTRS_TELEMETRY_SDK_NAME),
    "SEMRESATTRS_TELEMETRY_SDK_VERSION": (()=>SEMRESATTRS_TELEMETRY_SDK_VERSION),
    "SEMRESATTRS_WEBENGINE_DESCRIPTION": (()=>SEMRESATTRS_WEBENGINE_DESCRIPTION),
    "SEMRESATTRS_WEBENGINE_NAME": (()=>SEMRESATTRS_WEBENGINE_NAME),
    "SEMRESATTRS_WEBENGINE_VERSION": (()=>SEMRESATTRS_WEBENGINE_VERSION),
    "SemanticResourceAttributes": (()=>SemanticResourceAttributes),
    "TELEMETRYSDKLANGUAGEVALUES_CPP": (()=>TELEMETRYSDKLANGUAGEVALUES_CPP),
    "TELEMETRYSDKLANGUAGEVALUES_DOTNET": (()=>TELEMETRYSDKLANGUAGEVALUES_DOTNET),
    "TELEMETRYSDKLANGUAGEVALUES_ERLANG": (()=>TELEMETRYSDKLANGUAGEVALUES_ERLANG),
    "TELEMETRYSDKLANGUAGEVALUES_GO": (()=>TELEMETRYSDKLANGUAGEVALUES_GO),
    "TELEMETRYSDKLANGUAGEVALUES_JAVA": (()=>TELEMETRYSDKLANGUAGEVALUES_JAVA),
    "TELEMETRYSDKLANGUAGEVALUES_NODEJS": (()=>TELEMETRYSDKLANGUAGEVALUES_NODEJS),
    "TELEMETRYSDKLANGUAGEVALUES_PHP": (()=>TELEMETRYSDKLANGUAGEVALUES_PHP),
    "TELEMETRYSDKLANGUAGEVALUES_PYTHON": (()=>TELEMETRYSDKLANGUAGEVALUES_PYTHON),
    "TELEMETRYSDKLANGUAGEVALUES_RUBY": (()=>TELEMETRYSDKLANGUAGEVALUES_RUBY),
    "TELEMETRYSDKLANGUAGEVALUES_WEBJS": (()=>TELEMETRYSDKLANGUAGEVALUES_WEBJS),
    "TelemetrySdkLanguageValues": (()=>TelemetrySdkLanguageValues)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/esm/internal/utils.js [app-ssr] (ecmascript)");
;
//----------------------------------------------------------------------------------------------------------
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
// Constant values for SemanticResourceAttributes
//----------------------------------------------------------------------------------------------------------
// Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_CLOUD_PROVIDER = 'cloud.provider';
var TMP_CLOUD_ACCOUNT_ID = 'cloud.account.id';
var TMP_CLOUD_REGION = 'cloud.region';
var TMP_CLOUD_AVAILABILITY_ZONE = 'cloud.availability_zone';
var TMP_CLOUD_PLATFORM = 'cloud.platform';
var TMP_AWS_ECS_CONTAINER_ARN = 'aws.ecs.container.arn';
var TMP_AWS_ECS_CLUSTER_ARN = 'aws.ecs.cluster.arn';
var TMP_AWS_ECS_LAUNCHTYPE = 'aws.ecs.launchtype';
var TMP_AWS_ECS_TASK_ARN = 'aws.ecs.task.arn';
var TMP_AWS_ECS_TASK_FAMILY = 'aws.ecs.task.family';
var TMP_AWS_ECS_TASK_REVISION = 'aws.ecs.task.revision';
var TMP_AWS_EKS_CLUSTER_ARN = 'aws.eks.cluster.arn';
var TMP_AWS_LOG_GROUP_NAMES = 'aws.log.group.names';
var TMP_AWS_LOG_GROUP_ARNS = 'aws.log.group.arns';
var TMP_AWS_LOG_STREAM_NAMES = 'aws.log.stream.names';
var TMP_AWS_LOG_STREAM_ARNS = 'aws.log.stream.arns';
var TMP_CONTAINER_NAME = 'container.name';
var TMP_CONTAINER_ID = 'container.id';
var TMP_CONTAINER_RUNTIME = 'container.runtime';
var TMP_CONTAINER_IMAGE_NAME = 'container.image.name';
var TMP_CONTAINER_IMAGE_TAG = 'container.image.tag';
var TMP_DEPLOYMENT_ENVIRONMENT = 'deployment.environment';
var TMP_DEVICE_ID = 'device.id';
var TMP_DEVICE_MODEL_IDENTIFIER = 'device.model.identifier';
var TMP_DEVICE_MODEL_NAME = 'device.model.name';
var TMP_FAAS_NAME = 'faas.name';
var TMP_FAAS_ID = 'faas.id';
var TMP_FAAS_VERSION = 'faas.version';
var TMP_FAAS_INSTANCE = 'faas.instance';
var TMP_FAAS_MAX_MEMORY = 'faas.max_memory';
var TMP_HOST_ID = 'host.id';
var TMP_HOST_NAME = 'host.name';
var TMP_HOST_TYPE = 'host.type';
var TMP_HOST_ARCH = 'host.arch';
var TMP_HOST_IMAGE_NAME = 'host.image.name';
var TMP_HOST_IMAGE_ID = 'host.image.id';
var TMP_HOST_IMAGE_VERSION = 'host.image.version';
var TMP_K8S_CLUSTER_NAME = 'k8s.cluster.name';
var TMP_K8S_NODE_NAME = 'k8s.node.name';
var TMP_K8S_NODE_UID = 'k8s.node.uid';
var TMP_K8S_NAMESPACE_NAME = 'k8s.namespace.name';
var TMP_K8S_POD_UID = 'k8s.pod.uid';
var TMP_K8S_POD_NAME = 'k8s.pod.name';
var TMP_K8S_CONTAINER_NAME = 'k8s.container.name';
var TMP_K8S_REPLICASET_UID = 'k8s.replicaset.uid';
var TMP_K8S_REPLICASET_NAME = 'k8s.replicaset.name';
var TMP_K8S_DEPLOYMENT_UID = 'k8s.deployment.uid';
var TMP_K8S_DEPLOYMENT_NAME = 'k8s.deployment.name';
var TMP_K8S_STATEFULSET_UID = 'k8s.statefulset.uid';
var TMP_K8S_STATEFULSET_NAME = 'k8s.statefulset.name';
var TMP_K8S_DAEMONSET_UID = 'k8s.daemonset.uid';
var TMP_K8S_DAEMONSET_NAME = 'k8s.daemonset.name';
var TMP_K8S_JOB_UID = 'k8s.job.uid';
var TMP_K8S_JOB_NAME = 'k8s.job.name';
var TMP_K8S_CRONJOB_UID = 'k8s.cronjob.uid';
var TMP_K8S_CRONJOB_NAME = 'k8s.cronjob.name';
var TMP_OS_TYPE = 'os.type';
var TMP_OS_DESCRIPTION = 'os.description';
var TMP_OS_NAME = 'os.name';
var TMP_OS_VERSION = 'os.version';
var TMP_PROCESS_PID = 'process.pid';
var TMP_PROCESS_EXECUTABLE_NAME = 'process.executable.name';
var TMP_PROCESS_EXECUTABLE_PATH = 'process.executable.path';
var TMP_PROCESS_COMMAND = 'process.command';
var TMP_PROCESS_COMMAND_LINE = 'process.command_line';
var TMP_PROCESS_COMMAND_ARGS = 'process.command_args';
var TMP_PROCESS_OWNER = 'process.owner';
var TMP_PROCESS_RUNTIME_NAME = 'process.runtime.name';
var TMP_PROCESS_RUNTIME_VERSION = 'process.runtime.version';
var TMP_PROCESS_RUNTIME_DESCRIPTION = 'process.runtime.description';
var TMP_SERVICE_NAME = 'service.name';
var TMP_SERVICE_NAMESPACE = 'service.namespace';
var TMP_SERVICE_INSTANCE_ID = 'service.instance.id';
var TMP_SERVICE_VERSION = 'service.version';
var TMP_TELEMETRY_SDK_NAME = 'telemetry.sdk.name';
var TMP_TELEMETRY_SDK_LANGUAGE = 'telemetry.sdk.language';
var TMP_TELEMETRY_SDK_VERSION = 'telemetry.sdk.version';
var TMP_TELEMETRY_AUTO_VERSION = 'telemetry.auto.version';
var TMP_WEBENGINE_NAME = 'webengine.name';
var TMP_WEBENGINE_VERSION = 'webengine.version';
var TMP_WEBENGINE_DESCRIPTION = 'webengine.description';
var SEMRESATTRS_CLOUD_PROVIDER = TMP_CLOUD_PROVIDER;
var SEMRESATTRS_CLOUD_ACCOUNT_ID = TMP_CLOUD_ACCOUNT_ID;
var SEMRESATTRS_CLOUD_REGION = TMP_CLOUD_REGION;
var SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = TMP_CLOUD_AVAILABILITY_ZONE;
var SEMRESATTRS_CLOUD_PLATFORM = TMP_CLOUD_PLATFORM;
var SEMRESATTRS_AWS_ECS_CONTAINER_ARN = TMP_AWS_ECS_CONTAINER_ARN;
var SEMRESATTRS_AWS_ECS_CLUSTER_ARN = TMP_AWS_ECS_CLUSTER_ARN;
var SEMRESATTRS_AWS_ECS_LAUNCHTYPE = TMP_AWS_ECS_LAUNCHTYPE;
var SEMRESATTRS_AWS_ECS_TASK_ARN = TMP_AWS_ECS_TASK_ARN;
var SEMRESATTRS_AWS_ECS_TASK_FAMILY = TMP_AWS_ECS_TASK_FAMILY;
var SEMRESATTRS_AWS_ECS_TASK_REVISION = TMP_AWS_ECS_TASK_REVISION;
var SEMRESATTRS_AWS_EKS_CLUSTER_ARN = TMP_AWS_EKS_CLUSTER_ARN;
var SEMRESATTRS_AWS_LOG_GROUP_NAMES = TMP_AWS_LOG_GROUP_NAMES;
var SEMRESATTRS_AWS_LOG_GROUP_ARNS = TMP_AWS_LOG_GROUP_ARNS;
var SEMRESATTRS_AWS_LOG_STREAM_NAMES = TMP_AWS_LOG_STREAM_NAMES;
var SEMRESATTRS_AWS_LOG_STREAM_ARNS = TMP_AWS_LOG_STREAM_ARNS;
var SEMRESATTRS_CONTAINER_NAME = TMP_CONTAINER_NAME;
var SEMRESATTRS_CONTAINER_ID = TMP_CONTAINER_ID;
var SEMRESATTRS_CONTAINER_RUNTIME = TMP_CONTAINER_RUNTIME;
var SEMRESATTRS_CONTAINER_IMAGE_NAME = TMP_CONTAINER_IMAGE_NAME;
var SEMRESATTRS_CONTAINER_IMAGE_TAG = TMP_CONTAINER_IMAGE_TAG;
var SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = TMP_DEPLOYMENT_ENVIRONMENT;
var SEMRESATTRS_DEVICE_ID = TMP_DEVICE_ID;
var SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = TMP_DEVICE_MODEL_IDENTIFIER;
var SEMRESATTRS_DEVICE_MODEL_NAME = TMP_DEVICE_MODEL_NAME;
var SEMRESATTRS_FAAS_NAME = TMP_FAAS_NAME;
var SEMRESATTRS_FAAS_ID = TMP_FAAS_ID;
var SEMRESATTRS_FAAS_VERSION = TMP_FAAS_VERSION;
var SEMRESATTRS_FAAS_INSTANCE = TMP_FAAS_INSTANCE;
var SEMRESATTRS_FAAS_MAX_MEMORY = TMP_FAAS_MAX_MEMORY;
var SEMRESATTRS_HOST_ID = TMP_HOST_ID;
var SEMRESATTRS_HOST_NAME = TMP_HOST_NAME;
var SEMRESATTRS_HOST_TYPE = TMP_HOST_TYPE;
var SEMRESATTRS_HOST_ARCH = TMP_HOST_ARCH;
var SEMRESATTRS_HOST_IMAGE_NAME = TMP_HOST_IMAGE_NAME;
var SEMRESATTRS_HOST_IMAGE_ID = TMP_HOST_IMAGE_ID;
var SEMRESATTRS_HOST_IMAGE_VERSION = TMP_HOST_IMAGE_VERSION;
var SEMRESATTRS_K8S_CLUSTER_NAME = TMP_K8S_CLUSTER_NAME;
var SEMRESATTRS_K8S_NODE_NAME = TMP_K8S_NODE_NAME;
var SEMRESATTRS_K8S_NODE_UID = TMP_K8S_NODE_UID;
var SEMRESATTRS_K8S_NAMESPACE_NAME = TMP_K8S_NAMESPACE_NAME;
var SEMRESATTRS_K8S_POD_UID = TMP_K8S_POD_UID;
var SEMRESATTRS_K8S_POD_NAME = TMP_K8S_POD_NAME;
var SEMRESATTRS_K8S_CONTAINER_NAME = TMP_K8S_CONTAINER_NAME;
var SEMRESATTRS_K8S_REPLICASET_UID = TMP_K8S_REPLICASET_UID;
var SEMRESATTRS_K8S_REPLICASET_NAME = TMP_K8S_REPLICASET_NAME;
var SEMRESATTRS_K8S_DEPLOYMENT_UID = TMP_K8S_DEPLOYMENT_UID;
var SEMRESATTRS_K8S_DEPLOYMENT_NAME = TMP_K8S_DEPLOYMENT_NAME;
var SEMRESATTRS_K8S_STATEFULSET_UID = TMP_K8S_STATEFULSET_UID;
var SEMRESATTRS_K8S_STATEFULSET_NAME = TMP_K8S_STATEFULSET_NAME;
var SEMRESATTRS_K8S_DAEMONSET_UID = TMP_K8S_DAEMONSET_UID;
var SEMRESATTRS_K8S_DAEMONSET_NAME = TMP_K8S_DAEMONSET_NAME;
var SEMRESATTRS_K8S_JOB_UID = TMP_K8S_JOB_UID;
var SEMRESATTRS_K8S_JOB_NAME = TMP_K8S_JOB_NAME;
var SEMRESATTRS_K8S_CRONJOB_UID = TMP_K8S_CRONJOB_UID;
var SEMRESATTRS_K8S_CRONJOB_NAME = TMP_K8S_CRONJOB_NAME;
var SEMRESATTRS_OS_TYPE = TMP_OS_TYPE;
var SEMRESATTRS_OS_DESCRIPTION = TMP_OS_DESCRIPTION;
var SEMRESATTRS_OS_NAME = TMP_OS_NAME;
var SEMRESATTRS_OS_VERSION = TMP_OS_VERSION;
var SEMRESATTRS_PROCESS_PID = TMP_PROCESS_PID;
var SEMRESATTRS_PROCESS_EXECUTABLE_NAME = TMP_PROCESS_EXECUTABLE_NAME;
var SEMRESATTRS_PROCESS_EXECUTABLE_PATH = TMP_PROCESS_EXECUTABLE_PATH;
var SEMRESATTRS_PROCESS_COMMAND = TMP_PROCESS_COMMAND;
var SEMRESATTRS_PROCESS_COMMAND_LINE = TMP_PROCESS_COMMAND_LINE;
var SEMRESATTRS_PROCESS_COMMAND_ARGS = TMP_PROCESS_COMMAND_ARGS;
var SEMRESATTRS_PROCESS_OWNER = TMP_PROCESS_OWNER;
var SEMRESATTRS_PROCESS_RUNTIME_NAME = TMP_PROCESS_RUNTIME_NAME;
var SEMRESATTRS_PROCESS_RUNTIME_VERSION = TMP_PROCESS_RUNTIME_VERSION;
var SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = TMP_PROCESS_RUNTIME_DESCRIPTION;
var SEMRESATTRS_SERVICE_NAME = TMP_SERVICE_NAME;
var SEMRESATTRS_SERVICE_NAMESPACE = TMP_SERVICE_NAMESPACE;
var SEMRESATTRS_SERVICE_INSTANCE_ID = TMP_SERVICE_INSTANCE_ID;
var SEMRESATTRS_SERVICE_VERSION = TMP_SERVICE_VERSION;
var SEMRESATTRS_TELEMETRY_SDK_NAME = TMP_TELEMETRY_SDK_NAME;
var SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = TMP_TELEMETRY_SDK_LANGUAGE;
var SEMRESATTRS_TELEMETRY_SDK_VERSION = TMP_TELEMETRY_SDK_VERSION;
var SEMRESATTRS_TELEMETRY_AUTO_VERSION = TMP_TELEMETRY_AUTO_VERSION;
var SEMRESATTRS_WEBENGINE_NAME = TMP_WEBENGINE_NAME;
var SEMRESATTRS_WEBENGINE_VERSION = TMP_WEBENGINE_VERSION;
var SEMRESATTRS_WEBENGINE_DESCRIPTION = TMP_WEBENGINE_DESCRIPTION;
var SemanticResourceAttributes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_CLOUD_PROVIDER,
    TMP_CLOUD_ACCOUNT_ID,
    TMP_CLOUD_REGION,
    TMP_CLOUD_AVAILABILITY_ZONE,
    TMP_CLOUD_PLATFORM,
    TMP_AWS_ECS_CONTAINER_ARN,
    TMP_AWS_ECS_CLUSTER_ARN,
    TMP_AWS_ECS_LAUNCHTYPE,
    TMP_AWS_ECS_TASK_ARN,
    TMP_AWS_ECS_TASK_FAMILY,
    TMP_AWS_ECS_TASK_REVISION,
    TMP_AWS_EKS_CLUSTER_ARN,
    TMP_AWS_LOG_GROUP_NAMES,
    TMP_AWS_LOG_GROUP_ARNS,
    TMP_AWS_LOG_STREAM_NAMES,
    TMP_AWS_LOG_STREAM_ARNS,
    TMP_CONTAINER_NAME,
    TMP_CONTAINER_ID,
    TMP_CONTAINER_RUNTIME,
    TMP_CONTAINER_IMAGE_NAME,
    TMP_CONTAINER_IMAGE_TAG,
    TMP_DEPLOYMENT_ENVIRONMENT,
    TMP_DEVICE_ID,
    TMP_DEVICE_MODEL_IDENTIFIER,
    TMP_DEVICE_MODEL_NAME,
    TMP_FAAS_NAME,
    TMP_FAAS_ID,
    TMP_FAAS_VERSION,
    TMP_FAAS_INSTANCE,
    TMP_FAAS_MAX_MEMORY,
    TMP_HOST_ID,
    TMP_HOST_NAME,
    TMP_HOST_TYPE,
    TMP_HOST_ARCH,
    TMP_HOST_IMAGE_NAME,
    TMP_HOST_IMAGE_ID,
    TMP_HOST_IMAGE_VERSION,
    TMP_K8S_CLUSTER_NAME,
    TMP_K8S_NODE_NAME,
    TMP_K8S_NODE_UID,
    TMP_K8S_NAMESPACE_NAME,
    TMP_K8S_POD_UID,
    TMP_K8S_POD_NAME,
    TMP_K8S_CONTAINER_NAME,
    TMP_K8S_REPLICASET_UID,
    TMP_K8S_REPLICASET_NAME,
    TMP_K8S_DEPLOYMENT_UID,
    TMP_K8S_DEPLOYMENT_NAME,
    TMP_K8S_STATEFULSET_UID,
    TMP_K8S_STATEFULSET_NAME,
    TMP_K8S_DAEMONSET_UID,
    TMP_K8S_DAEMONSET_NAME,
    TMP_K8S_JOB_UID,
    TMP_K8S_JOB_NAME,
    TMP_K8S_CRONJOB_UID,
    TMP_K8S_CRONJOB_NAME,
    TMP_OS_TYPE,
    TMP_OS_DESCRIPTION,
    TMP_OS_NAME,
    TMP_OS_VERSION,
    TMP_PROCESS_PID,
    TMP_PROCESS_EXECUTABLE_NAME,
    TMP_PROCESS_EXECUTABLE_PATH,
    TMP_PROCESS_COMMAND,
    TMP_PROCESS_COMMAND_LINE,
    TMP_PROCESS_COMMAND_ARGS,
    TMP_PROCESS_OWNER,
    TMP_PROCESS_RUNTIME_NAME,
    TMP_PROCESS_RUNTIME_VERSION,
    TMP_PROCESS_RUNTIME_DESCRIPTION,
    TMP_SERVICE_NAME,
    TMP_SERVICE_NAMESPACE,
    TMP_SERVICE_INSTANCE_ID,
    TMP_SERVICE_VERSION,
    TMP_TELEMETRY_SDK_NAME,
    TMP_TELEMETRY_SDK_LANGUAGE,
    TMP_TELEMETRY_SDK_VERSION,
    TMP_TELEMETRY_AUTO_VERSION,
    TMP_WEBENGINE_NAME,
    TMP_WEBENGINE_VERSION,
    TMP_WEBENGINE_DESCRIPTION
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for CloudProviderValues enum definition
 *
 * Name of the cloud provider.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD = 'alibaba_cloud';
var TMP_CLOUDPROVIDERVALUES_AWS = 'aws';
var TMP_CLOUDPROVIDERVALUES_AZURE = 'azure';
var TMP_CLOUDPROVIDERVALUES_GCP = 'gcp';
var CLOUDPROVIDERVALUES_ALIBABA_CLOUD = TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD;
var CLOUDPROVIDERVALUES_AWS = TMP_CLOUDPROVIDERVALUES_AWS;
var CLOUDPROVIDERVALUES_AZURE = TMP_CLOUDPROVIDERVALUES_AZURE;
var CLOUDPROVIDERVALUES_GCP = TMP_CLOUDPROVIDERVALUES_GCP;
var CloudProviderValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD,
    TMP_CLOUDPROVIDERVALUES_AWS,
    TMP_CLOUDPROVIDERVALUES_AZURE,
    TMP_CLOUDPROVIDERVALUES_GCP
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for CloudPlatformValues enum definition
 *
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = 'alibaba_cloud_ecs';
var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = 'alibaba_cloud_fc';
var TMP_CLOUDPLATFORMVALUES_AWS_EC2 = 'aws_ec2';
var TMP_CLOUDPLATFORMVALUES_AWS_ECS = 'aws_ecs';
var TMP_CLOUDPLATFORMVALUES_AWS_EKS = 'aws_eks';
var TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA = 'aws_lambda';
var TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = 'aws_elastic_beanstalk';
var TMP_CLOUDPLATFORMVALUES_AZURE_VM = 'azure_vm';
var TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = 'azure_container_instances';
var TMP_CLOUDPLATFORMVALUES_AZURE_AKS = 'azure_aks';
var TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = 'azure_functions';
var TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = 'azure_app_service';
var TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = 'gcp_compute_engine';
var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = 'gcp_cloud_run';
var TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = 'gcp_kubernetes_engine';
var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = 'gcp_cloud_functions';
var TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE = 'gcp_app_engine';
var CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS;
var CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC;
var CLOUDPLATFORMVALUES_AWS_EC2 = TMP_CLOUDPLATFORMVALUES_AWS_EC2;
var CLOUDPLATFORMVALUES_AWS_ECS = TMP_CLOUDPLATFORMVALUES_AWS_ECS;
var CLOUDPLATFORMVALUES_AWS_EKS = TMP_CLOUDPLATFORMVALUES_AWS_EKS;
var CLOUDPLATFORMVALUES_AWS_LAMBDA = TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA;
var CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK;
var CLOUDPLATFORMVALUES_AZURE_VM = TMP_CLOUDPLATFORMVALUES_AZURE_VM;
var CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES;
var CLOUDPLATFORMVALUES_AZURE_AKS = TMP_CLOUDPLATFORMVALUES_AZURE_AKS;
var CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS;
var CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE;
var CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE;
var CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN;
var CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE;
var CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS;
var CLOUDPLATFORMVALUES_GCP_APP_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE;
var CloudPlatformValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS,
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC,
    TMP_CLOUDPLATFORMVALUES_AWS_EC2,
    TMP_CLOUDPLATFORMVALUES_AWS_ECS,
    TMP_CLOUDPLATFORMVALUES_AWS_EKS,
    TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA,
    TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK,
    TMP_CLOUDPLATFORMVALUES_AZURE_VM,
    TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES,
    TMP_CLOUDPLATFORMVALUES_AZURE_AKS,
    TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE,
    TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN,
    TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for AwsEcsLaunchtypeValues enum definition
 *
 * The [launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) for an ECS task.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_AWSECSLAUNCHTYPEVALUES_EC2 = 'ec2';
var TMP_AWSECSLAUNCHTYPEVALUES_FARGATE = 'fargate';
var AWSECSLAUNCHTYPEVALUES_EC2 = TMP_AWSECSLAUNCHTYPEVALUES_EC2;
var AWSECSLAUNCHTYPEVALUES_FARGATE = TMP_AWSECSLAUNCHTYPEVALUES_FARGATE;
var AwsEcsLaunchtypeValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_AWSECSLAUNCHTYPEVALUES_EC2,
    TMP_AWSECSLAUNCHTYPEVALUES_FARGATE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for HostArchValues enum definition
 *
 * The CPU architecture the host system is running on.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_HOSTARCHVALUES_AMD64 = 'amd64';
var TMP_HOSTARCHVALUES_ARM32 = 'arm32';
var TMP_HOSTARCHVALUES_ARM64 = 'arm64';
var TMP_HOSTARCHVALUES_IA64 = 'ia64';
var TMP_HOSTARCHVALUES_PPC32 = 'ppc32';
var TMP_HOSTARCHVALUES_PPC64 = 'ppc64';
var TMP_HOSTARCHVALUES_X86 = 'x86';
var HOSTARCHVALUES_AMD64 = TMP_HOSTARCHVALUES_AMD64;
var HOSTARCHVALUES_ARM32 = TMP_HOSTARCHVALUES_ARM32;
var HOSTARCHVALUES_ARM64 = TMP_HOSTARCHVALUES_ARM64;
var HOSTARCHVALUES_IA64 = TMP_HOSTARCHVALUES_IA64;
var HOSTARCHVALUES_PPC32 = TMP_HOSTARCHVALUES_PPC32;
var HOSTARCHVALUES_PPC64 = TMP_HOSTARCHVALUES_PPC64;
var HOSTARCHVALUES_X86 = TMP_HOSTARCHVALUES_X86;
var HostArchValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_HOSTARCHVALUES_AMD64,
    TMP_HOSTARCHVALUES_ARM32,
    TMP_HOSTARCHVALUES_ARM64,
    TMP_HOSTARCHVALUES_IA64,
    TMP_HOSTARCHVALUES_PPC32,
    TMP_HOSTARCHVALUES_PPC64,
    TMP_HOSTARCHVALUES_X86
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for OsTypeValues enum definition
 *
 * The operating system type.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_OSTYPEVALUES_WINDOWS = 'windows';
var TMP_OSTYPEVALUES_LINUX = 'linux';
var TMP_OSTYPEVALUES_DARWIN = 'darwin';
var TMP_OSTYPEVALUES_FREEBSD = 'freebsd';
var TMP_OSTYPEVALUES_NETBSD = 'netbsd';
var TMP_OSTYPEVALUES_OPENBSD = 'openbsd';
var TMP_OSTYPEVALUES_DRAGONFLYBSD = 'dragonflybsd';
var TMP_OSTYPEVALUES_HPUX = 'hpux';
var TMP_OSTYPEVALUES_AIX = 'aix';
var TMP_OSTYPEVALUES_SOLARIS = 'solaris';
var TMP_OSTYPEVALUES_Z_OS = 'z_os';
var OSTYPEVALUES_WINDOWS = TMP_OSTYPEVALUES_WINDOWS;
var OSTYPEVALUES_LINUX = TMP_OSTYPEVALUES_LINUX;
var OSTYPEVALUES_DARWIN = TMP_OSTYPEVALUES_DARWIN;
var OSTYPEVALUES_FREEBSD = TMP_OSTYPEVALUES_FREEBSD;
var OSTYPEVALUES_NETBSD = TMP_OSTYPEVALUES_NETBSD;
var OSTYPEVALUES_OPENBSD = TMP_OSTYPEVALUES_OPENBSD;
var OSTYPEVALUES_DRAGONFLYBSD = TMP_OSTYPEVALUES_DRAGONFLYBSD;
var OSTYPEVALUES_HPUX = TMP_OSTYPEVALUES_HPUX;
var OSTYPEVALUES_AIX = TMP_OSTYPEVALUES_AIX;
var OSTYPEVALUES_SOLARIS = TMP_OSTYPEVALUES_SOLARIS;
var OSTYPEVALUES_Z_OS = TMP_OSTYPEVALUES_Z_OS;
var OsTypeValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_OSTYPEVALUES_WINDOWS,
    TMP_OSTYPEVALUES_LINUX,
    TMP_OSTYPEVALUES_DARWIN,
    TMP_OSTYPEVALUES_FREEBSD,
    TMP_OSTYPEVALUES_NETBSD,
    TMP_OSTYPEVALUES_OPENBSD,
    TMP_OSTYPEVALUES_DRAGONFLYBSD,
    TMP_OSTYPEVALUES_HPUX,
    TMP_OSTYPEVALUES_AIX,
    TMP_OSTYPEVALUES_SOLARIS,
    TMP_OSTYPEVALUES_Z_OS
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for TelemetrySdkLanguageValues enum definition
 *
 * The language of the telemetry SDK.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_TELEMETRYSDKLANGUAGEVALUES_CPP = 'cpp';
var TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET = 'dotnet';
var TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG = 'erlang';
var TMP_TELEMETRYSDKLANGUAGEVALUES_GO = 'go';
var TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA = 'java';
var TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS = 'nodejs';
var TMP_TELEMETRYSDKLANGUAGEVALUES_PHP = 'php';
var TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON = 'python';
var TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY = 'ruby';
var TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS = 'webjs';
var TELEMETRYSDKLANGUAGEVALUES_CPP = TMP_TELEMETRYSDKLANGUAGEVALUES_CPP;
var TELEMETRYSDKLANGUAGEVALUES_DOTNET = TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET;
var TELEMETRYSDKLANGUAGEVALUES_ERLANG = TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG;
var TELEMETRYSDKLANGUAGEVALUES_GO = TMP_TELEMETRYSDKLANGUAGEVALUES_GO;
var TELEMETRYSDKLANGUAGEVALUES_JAVA = TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA;
var TELEMETRYSDKLANGUAGEVALUES_NODEJS = TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS;
var TELEMETRYSDKLANGUAGEVALUES_PHP = TMP_TELEMETRYSDKLANGUAGEVALUES_PHP;
var TELEMETRYSDKLANGUAGEVALUES_PYTHON = TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON;
var TELEMETRYSDKLANGUAGEVALUES_RUBY = TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY;
var TELEMETRYSDKLANGUAGEVALUES_WEBJS = TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS;
var TelemetrySdkLanguageValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_TELEMETRYSDKLANGUAGEVALUES_CPP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET,
    TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG,
    TMP_TELEMETRYSDKLANGUAGEVALUES_GO,
    TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA,
    TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PHP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON,
    TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY,
    TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS
]); //# sourceMappingURL=SemanticResourceAttributes.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/semantic-conventions/build/esm/internal/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Creates a const map from the given values
 * @param values - An array of values to be used as keys and values in the map.
 * @returns A populated version of the map with the values and keys derived from the values.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s({
    "createConstMap": (()=>createConstMap)
});
function createConstMap(values) {
    // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
    var res = {};
    var len = values.length;
    for(var lp = 0; lp < len; lp++){
        var val = values[lp];
        if (val) {
            res[String(val).toUpperCase().replace(/[-.]/g, '_')] = val;
        }
    }
    return res;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/SemanticAttributes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "DBCASSANDRACONSISTENCYLEVELVALUES_ALL": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_ALL),
    "DBCASSANDRACONSISTENCYLEVELVALUES_ANY": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_ANY),
    "DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM),
    "DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE),
    "DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM),
    "DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL),
    "DBCASSANDRACONSISTENCYLEVELVALUES_ONE": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_ONE),
    "DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM),
    "DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL),
    "DBCASSANDRACONSISTENCYLEVELVALUES_THREE": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_THREE),
    "DBCASSANDRACONSISTENCYLEVELVALUES_TWO": (()=>DBCASSANDRACONSISTENCYLEVELVALUES_TWO),
    "DBSYSTEMVALUES_ADABAS": (()=>DBSYSTEMVALUES_ADABAS),
    "DBSYSTEMVALUES_CACHE": (()=>DBSYSTEMVALUES_CACHE),
    "DBSYSTEMVALUES_CASSANDRA": (()=>DBSYSTEMVALUES_CASSANDRA),
    "DBSYSTEMVALUES_CLOUDSCAPE": (()=>DBSYSTEMVALUES_CLOUDSCAPE),
    "DBSYSTEMVALUES_COCKROACHDB": (()=>DBSYSTEMVALUES_COCKROACHDB),
    "DBSYSTEMVALUES_COLDFUSION": (()=>DBSYSTEMVALUES_COLDFUSION),
    "DBSYSTEMVALUES_COSMOSDB": (()=>DBSYSTEMVALUES_COSMOSDB),
    "DBSYSTEMVALUES_COUCHBASE": (()=>DBSYSTEMVALUES_COUCHBASE),
    "DBSYSTEMVALUES_COUCHDB": (()=>DBSYSTEMVALUES_COUCHDB),
    "DBSYSTEMVALUES_DB2": (()=>DBSYSTEMVALUES_DB2),
    "DBSYSTEMVALUES_DERBY": (()=>DBSYSTEMVALUES_DERBY),
    "DBSYSTEMVALUES_DYNAMODB": (()=>DBSYSTEMVALUES_DYNAMODB),
    "DBSYSTEMVALUES_EDB": (()=>DBSYSTEMVALUES_EDB),
    "DBSYSTEMVALUES_ELASTICSEARCH": (()=>DBSYSTEMVALUES_ELASTICSEARCH),
    "DBSYSTEMVALUES_FILEMAKER": (()=>DBSYSTEMVALUES_FILEMAKER),
    "DBSYSTEMVALUES_FIREBIRD": (()=>DBSYSTEMVALUES_FIREBIRD),
    "DBSYSTEMVALUES_FIRSTSQL": (()=>DBSYSTEMVALUES_FIRSTSQL),
    "DBSYSTEMVALUES_GEODE": (()=>DBSYSTEMVALUES_GEODE),
    "DBSYSTEMVALUES_H2": (()=>DBSYSTEMVALUES_H2),
    "DBSYSTEMVALUES_HANADB": (()=>DBSYSTEMVALUES_HANADB),
    "DBSYSTEMVALUES_HBASE": (()=>DBSYSTEMVALUES_HBASE),
    "DBSYSTEMVALUES_HIVE": (()=>DBSYSTEMVALUES_HIVE),
    "DBSYSTEMVALUES_HSQLDB": (()=>DBSYSTEMVALUES_HSQLDB),
    "DBSYSTEMVALUES_INFORMIX": (()=>DBSYSTEMVALUES_INFORMIX),
    "DBSYSTEMVALUES_INGRES": (()=>DBSYSTEMVALUES_INGRES),
    "DBSYSTEMVALUES_INSTANTDB": (()=>DBSYSTEMVALUES_INSTANTDB),
    "DBSYSTEMVALUES_INTERBASE": (()=>DBSYSTEMVALUES_INTERBASE),
    "DBSYSTEMVALUES_MARIADB": (()=>DBSYSTEMVALUES_MARIADB),
    "DBSYSTEMVALUES_MAXDB": (()=>DBSYSTEMVALUES_MAXDB),
    "DBSYSTEMVALUES_MEMCACHED": (()=>DBSYSTEMVALUES_MEMCACHED),
    "DBSYSTEMVALUES_MONGODB": (()=>DBSYSTEMVALUES_MONGODB),
    "DBSYSTEMVALUES_MSSQL": (()=>DBSYSTEMVALUES_MSSQL),
    "DBSYSTEMVALUES_MYSQL": (()=>DBSYSTEMVALUES_MYSQL),
    "DBSYSTEMVALUES_NEO4J": (()=>DBSYSTEMVALUES_NEO4J),
    "DBSYSTEMVALUES_NETEZZA": (()=>DBSYSTEMVALUES_NETEZZA),
    "DBSYSTEMVALUES_ORACLE": (()=>DBSYSTEMVALUES_ORACLE),
    "DBSYSTEMVALUES_OTHER_SQL": (()=>DBSYSTEMVALUES_OTHER_SQL),
    "DBSYSTEMVALUES_PERVASIVE": (()=>DBSYSTEMVALUES_PERVASIVE),
    "DBSYSTEMVALUES_POINTBASE": (()=>DBSYSTEMVALUES_POINTBASE),
    "DBSYSTEMVALUES_POSTGRESQL": (()=>DBSYSTEMVALUES_POSTGRESQL),
    "DBSYSTEMVALUES_PROGRESS": (()=>DBSYSTEMVALUES_PROGRESS),
    "DBSYSTEMVALUES_REDIS": (()=>DBSYSTEMVALUES_REDIS),
    "DBSYSTEMVALUES_REDSHIFT": (()=>DBSYSTEMVALUES_REDSHIFT),
    "DBSYSTEMVALUES_SQLITE": (()=>DBSYSTEMVALUES_SQLITE),
    "DBSYSTEMVALUES_SYBASE": (()=>DBSYSTEMVALUES_SYBASE),
    "DBSYSTEMVALUES_TERADATA": (()=>DBSYSTEMVALUES_TERADATA),
    "DBSYSTEMVALUES_VERTICA": (()=>DBSYSTEMVALUES_VERTICA),
    "DbCassandraConsistencyLevelValues": (()=>DbCassandraConsistencyLevelValues),
    "DbSystemValues": (()=>DbSystemValues),
    "FAASDOCUMENTOPERATIONVALUES_DELETE": (()=>FAASDOCUMENTOPERATIONVALUES_DELETE),
    "FAASDOCUMENTOPERATIONVALUES_EDIT": (()=>FAASDOCUMENTOPERATIONVALUES_EDIT),
    "FAASDOCUMENTOPERATIONVALUES_INSERT": (()=>FAASDOCUMENTOPERATIONVALUES_INSERT),
    "FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD": (()=>FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD),
    "FAASINVOKEDPROVIDERVALUES_AWS": (()=>FAASINVOKEDPROVIDERVALUES_AWS),
    "FAASINVOKEDPROVIDERVALUES_AZURE": (()=>FAASINVOKEDPROVIDERVALUES_AZURE),
    "FAASINVOKEDPROVIDERVALUES_GCP": (()=>FAASINVOKEDPROVIDERVALUES_GCP),
    "FAASTRIGGERVALUES_DATASOURCE": (()=>FAASTRIGGERVALUES_DATASOURCE),
    "FAASTRIGGERVALUES_HTTP": (()=>FAASTRIGGERVALUES_HTTP),
    "FAASTRIGGERVALUES_OTHER": (()=>FAASTRIGGERVALUES_OTHER),
    "FAASTRIGGERVALUES_PUBSUB": (()=>FAASTRIGGERVALUES_PUBSUB),
    "FAASTRIGGERVALUES_TIMER": (()=>FAASTRIGGERVALUES_TIMER),
    "FaasDocumentOperationValues": (()=>FaasDocumentOperationValues),
    "FaasInvokedProviderValues": (()=>FaasInvokedProviderValues),
    "FaasTriggerValues": (()=>FaasTriggerValues),
    "HTTPFLAVORVALUES_HTTP_1_0": (()=>HTTPFLAVORVALUES_HTTP_1_0),
    "HTTPFLAVORVALUES_HTTP_1_1": (()=>HTTPFLAVORVALUES_HTTP_1_1),
    "HTTPFLAVORVALUES_HTTP_2_0": (()=>HTTPFLAVORVALUES_HTTP_2_0),
    "HTTPFLAVORVALUES_QUIC": (()=>HTTPFLAVORVALUES_QUIC),
    "HTTPFLAVORVALUES_SPDY": (()=>HTTPFLAVORVALUES_SPDY),
    "HttpFlavorValues": (()=>HttpFlavorValues),
    "MESSAGETYPEVALUES_RECEIVED": (()=>MESSAGETYPEVALUES_RECEIVED),
    "MESSAGETYPEVALUES_SENT": (()=>MESSAGETYPEVALUES_SENT),
    "MESSAGINGDESTINATIONKINDVALUES_QUEUE": (()=>MESSAGINGDESTINATIONKINDVALUES_QUEUE),
    "MESSAGINGDESTINATIONKINDVALUES_TOPIC": (()=>MESSAGINGDESTINATIONKINDVALUES_TOPIC),
    "MESSAGINGOPERATIONVALUES_PROCESS": (()=>MESSAGINGOPERATIONVALUES_PROCESS),
    "MESSAGINGOPERATIONVALUES_RECEIVE": (()=>MESSAGINGOPERATIONVALUES_RECEIVE),
    "MessageTypeValues": (()=>MessageTypeValues),
    "MessagingDestinationKindValues": (()=>MessagingDestinationKindValues),
    "MessagingOperationValues": (()=>MessagingOperationValues),
    "NETHOSTCONNECTIONSUBTYPEVALUES_CDMA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_CDMA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT),
    "NETHOSTCONNECTIONSUBTYPEVALUES_EDGE": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_EDGE),
    "NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD),
    "NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0),
    "NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A),
    "NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B),
    "NETHOSTCONNECTIONSUBTYPEVALUES_GPRS": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_GPRS),
    "NETHOSTCONNECTIONSUBTYPEVALUES_GSM": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_GSM),
    "NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_HSPA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_HSPA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP),
    "NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_IDEN": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_IDEN),
    "NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN),
    "NETHOSTCONNECTIONSUBTYPEVALUES_LTE": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_LTE),
    "NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_NR": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_NR),
    "NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA),
    "NETHOSTCONNECTIONSUBTYPEVALUES_UMTS": (()=>NETHOSTCONNECTIONSUBTYPEVALUES_UMTS),
    "NETHOSTCONNECTIONTYPEVALUES_CELL": (()=>NETHOSTCONNECTIONTYPEVALUES_CELL),
    "NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE": (()=>NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE),
    "NETHOSTCONNECTIONTYPEVALUES_UNKNOWN": (()=>NETHOSTCONNECTIONTYPEVALUES_UNKNOWN),
    "NETHOSTCONNECTIONTYPEVALUES_WIFI": (()=>NETHOSTCONNECTIONTYPEVALUES_WIFI),
    "NETHOSTCONNECTIONTYPEVALUES_WIRED": (()=>NETHOSTCONNECTIONTYPEVALUES_WIRED),
    "NETTRANSPORTVALUES_INPROC": (()=>NETTRANSPORTVALUES_INPROC),
    "NETTRANSPORTVALUES_IP": (()=>NETTRANSPORTVALUES_IP),
    "NETTRANSPORTVALUES_IP_TCP": (()=>NETTRANSPORTVALUES_IP_TCP),
    "NETTRANSPORTVALUES_IP_UDP": (()=>NETTRANSPORTVALUES_IP_UDP),
    "NETTRANSPORTVALUES_OTHER": (()=>NETTRANSPORTVALUES_OTHER),
    "NETTRANSPORTVALUES_PIPE": (()=>NETTRANSPORTVALUES_PIPE),
    "NETTRANSPORTVALUES_UNIX": (()=>NETTRANSPORTVALUES_UNIX),
    "NetHostConnectionSubtypeValues": (()=>NetHostConnectionSubtypeValues),
    "NetHostConnectionTypeValues": (()=>NetHostConnectionTypeValues),
    "NetTransportValues": (()=>NetTransportValues),
    "RPCGRPCSTATUSCODEVALUES_ABORTED": (()=>RPCGRPCSTATUSCODEVALUES_ABORTED),
    "RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS": (()=>RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS),
    "RPCGRPCSTATUSCODEVALUES_CANCELLED": (()=>RPCGRPCSTATUSCODEVALUES_CANCELLED),
    "RPCGRPCSTATUSCODEVALUES_DATA_LOSS": (()=>RPCGRPCSTATUSCODEVALUES_DATA_LOSS),
    "RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED": (()=>RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED),
    "RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION": (()=>RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION),
    "RPCGRPCSTATUSCODEVALUES_INTERNAL": (()=>RPCGRPCSTATUSCODEVALUES_INTERNAL),
    "RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT": (()=>RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT),
    "RPCGRPCSTATUSCODEVALUES_NOT_FOUND": (()=>RPCGRPCSTATUSCODEVALUES_NOT_FOUND),
    "RPCGRPCSTATUSCODEVALUES_OK": (()=>RPCGRPCSTATUSCODEVALUES_OK),
    "RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE": (()=>RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE),
    "RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED": (()=>RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED),
    "RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED": (()=>RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED),
    "RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED": (()=>RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED),
    "RPCGRPCSTATUSCODEVALUES_UNAVAILABLE": (()=>RPCGRPCSTATUSCODEVALUES_UNAVAILABLE),
    "RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED": (()=>RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED),
    "RPCGRPCSTATUSCODEVALUES_UNKNOWN": (()=>RPCGRPCSTATUSCODEVALUES_UNKNOWN),
    "RpcGrpcStatusCodeValues": (()=>RpcGrpcStatusCodeValues),
    "SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET": (()=>SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET),
    "SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS": (()=>SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS),
    "SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ": (()=>SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ),
    "SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY": (()=>SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY),
    "SEMATTRS_AWS_DYNAMODB_COUNT": (()=>SEMATTRS_AWS_DYNAMODB_COUNT),
    "SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE": (()=>SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE),
    "SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES": (()=>SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES),
    "SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES": (()=>SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES),
    "SEMATTRS_AWS_DYNAMODB_INDEX_NAME": (()=>SEMATTRS_AWS_DYNAMODB_INDEX_NAME),
    "SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS": (()=>SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS),
    "SEMATTRS_AWS_DYNAMODB_LIMIT": (()=>SEMATTRS_AWS_DYNAMODB_LIMIT),
    "SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES": (()=>SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES),
    "SEMATTRS_AWS_DYNAMODB_PROJECTION": (()=>SEMATTRS_AWS_DYNAMODB_PROJECTION),
    "SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY": (()=>SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY),
    "SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY": (()=>SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY),
    "SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT": (()=>SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT),
    "SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD": (()=>SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD),
    "SEMATTRS_AWS_DYNAMODB_SEGMENT": (()=>SEMATTRS_AWS_DYNAMODB_SEGMENT),
    "SEMATTRS_AWS_DYNAMODB_SELECT": (()=>SEMATTRS_AWS_DYNAMODB_SELECT),
    "SEMATTRS_AWS_DYNAMODB_TABLE_COUNT": (()=>SEMATTRS_AWS_DYNAMODB_TABLE_COUNT),
    "SEMATTRS_AWS_DYNAMODB_TABLE_NAMES": (()=>SEMATTRS_AWS_DYNAMODB_TABLE_NAMES),
    "SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS": (()=>SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS),
    "SEMATTRS_AWS_LAMBDA_INVOKED_ARN": (()=>SEMATTRS_AWS_LAMBDA_INVOKED_ARN),
    "SEMATTRS_CODE_FILEPATH": (()=>SEMATTRS_CODE_FILEPATH),
    "SEMATTRS_CODE_FUNCTION": (()=>SEMATTRS_CODE_FUNCTION),
    "SEMATTRS_CODE_LINENO": (()=>SEMATTRS_CODE_LINENO),
    "SEMATTRS_CODE_NAMESPACE": (()=>SEMATTRS_CODE_NAMESPACE),
    "SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL": (()=>SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL),
    "SEMATTRS_DB_CASSANDRA_COORDINATOR_DC": (()=>SEMATTRS_DB_CASSANDRA_COORDINATOR_DC),
    "SEMATTRS_DB_CASSANDRA_COORDINATOR_ID": (()=>SEMATTRS_DB_CASSANDRA_COORDINATOR_ID),
    "SEMATTRS_DB_CASSANDRA_IDEMPOTENCE": (()=>SEMATTRS_DB_CASSANDRA_IDEMPOTENCE),
    "SEMATTRS_DB_CASSANDRA_KEYSPACE": (()=>SEMATTRS_DB_CASSANDRA_KEYSPACE),
    "SEMATTRS_DB_CASSANDRA_PAGE_SIZE": (()=>SEMATTRS_DB_CASSANDRA_PAGE_SIZE),
    "SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT": (()=>SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT),
    "SEMATTRS_DB_CASSANDRA_TABLE": (()=>SEMATTRS_DB_CASSANDRA_TABLE),
    "SEMATTRS_DB_CONNECTION_STRING": (()=>SEMATTRS_DB_CONNECTION_STRING),
    "SEMATTRS_DB_HBASE_NAMESPACE": (()=>SEMATTRS_DB_HBASE_NAMESPACE),
    "SEMATTRS_DB_JDBC_DRIVER_CLASSNAME": (()=>SEMATTRS_DB_JDBC_DRIVER_CLASSNAME),
    "SEMATTRS_DB_MONGODB_COLLECTION": (()=>SEMATTRS_DB_MONGODB_COLLECTION),
    "SEMATTRS_DB_MSSQL_INSTANCE_NAME": (()=>SEMATTRS_DB_MSSQL_INSTANCE_NAME),
    "SEMATTRS_DB_NAME": (()=>SEMATTRS_DB_NAME),
    "SEMATTRS_DB_OPERATION": (()=>SEMATTRS_DB_OPERATION),
    "SEMATTRS_DB_REDIS_DATABASE_INDEX": (()=>SEMATTRS_DB_REDIS_DATABASE_INDEX),
    "SEMATTRS_DB_SQL_TABLE": (()=>SEMATTRS_DB_SQL_TABLE),
    "SEMATTRS_DB_STATEMENT": (()=>SEMATTRS_DB_STATEMENT),
    "SEMATTRS_DB_SYSTEM": (()=>SEMATTRS_DB_SYSTEM),
    "SEMATTRS_DB_USER": (()=>SEMATTRS_DB_USER),
    "SEMATTRS_ENDUSER_ID": (()=>SEMATTRS_ENDUSER_ID),
    "SEMATTRS_ENDUSER_ROLE": (()=>SEMATTRS_ENDUSER_ROLE),
    "SEMATTRS_ENDUSER_SCOPE": (()=>SEMATTRS_ENDUSER_SCOPE),
    "SEMATTRS_EXCEPTION_ESCAPED": (()=>SEMATTRS_EXCEPTION_ESCAPED),
    "SEMATTRS_EXCEPTION_MESSAGE": (()=>SEMATTRS_EXCEPTION_MESSAGE),
    "SEMATTRS_EXCEPTION_STACKTRACE": (()=>SEMATTRS_EXCEPTION_STACKTRACE),
    "SEMATTRS_EXCEPTION_TYPE": (()=>SEMATTRS_EXCEPTION_TYPE),
    "SEMATTRS_FAAS_COLDSTART": (()=>SEMATTRS_FAAS_COLDSTART),
    "SEMATTRS_FAAS_CRON": (()=>SEMATTRS_FAAS_CRON),
    "SEMATTRS_FAAS_DOCUMENT_COLLECTION": (()=>SEMATTRS_FAAS_DOCUMENT_COLLECTION),
    "SEMATTRS_FAAS_DOCUMENT_NAME": (()=>SEMATTRS_FAAS_DOCUMENT_NAME),
    "SEMATTRS_FAAS_DOCUMENT_OPERATION": (()=>SEMATTRS_FAAS_DOCUMENT_OPERATION),
    "SEMATTRS_FAAS_DOCUMENT_TIME": (()=>SEMATTRS_FAAS_DOCUMENT_TIME),
    "SEMATTRS_FAAS_EXECUTION": (()=>SEMATTRS_FAAS_EXECUTION),
    "SEMATTRS_FAAS_INVOKED_NAME": (()=>SEMATTRS_FAAS_INVOKED_NAME),
    "SEMATTRS_FAAS_INVOKED_PROVIDER": (()=>SEMATTRS_FAAS_INVOKED_PROVIDER),
    "SEMATTRS_FAAS_INVOKED_REGION": (()=>SEMATTRS_FAAS_INVOKED_REGION),
    "SEMATTRS_FAAS_TIME": (()=>SEMATTRS_FAAS_TIME),
    "SEMATTRS_FAAS_TRIGGER": (()=>SEMATTRS_FAAS_TRIGGER),
    "SEMATTRS_HTTP_CLIENT_IP": (()=>SEMATTRS_HTTP_CLIENT_IP),
    "SEMATTRS_HTTP_FLAVOR": (()=>SEMATTRS_HTTP_FLAVOR),
    "SEMATTRS_HTTP_HOST": (()=>SEMATTRS_HTTP_HOST),
    "SEMATTRS_HTTP_METHOD": (()=>SEMATTRS_HTTP_METHOD),
    "SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH": (()=>SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH),
    "SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED": (()=>SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED),
    "SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH": (()=>SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH),
    "SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED": (()=>SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED),
    "SEMATTRS_HTTP_ROUTE": (()=>SEMATTRS_HTTP_ROUTE),
    "SEMATTRS_HTTP_SCHEME": (()=>SEMATTRS_HTTP_SCHEME),
    "SEMATTRS_HTTP_SERVER_NAME": (()=>SEMATTRS_HTTP_SERVER_NAME),
    "SEMATTRS_HTTP_STATUS_CODE": (()=>SEMATTRS_HTTP_STATUS_CODE),
    "SEMATTRS_HTTP_TARGET": (()=>SEMATTRS_HTTP_TARGET),
    "SEMATTRS_HTTP_URL": (()=>SEMATTRS_HTTP_URL),
    "SEMATTRS_HTTP_USER_AGENT": (()=>SEMATTRS_HTTP_USER_AGENT),
    "SEMATTRS_MESSAGE_COMPRESSED_SIZE": (()=>SEMATTRS_MESSAGE_COMPRESSED_SIZE),
    "SEMATTRS_MESSAGE_ID": (()=>SEMATTRS_MESSAGE_ID),
    "SEMATTRS_MESSAGE_TYPE": (()=>SEMATTRS_MESSAGE_TYPE),
    "SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE": (()=>SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE),
    "SEMATTRS_MESSAGING_CONSUMER_ID": (()=>SEMATTRS_MESSAGING_CONSUMER_ID),
    "SEMATTRS_MESSAGING_CONVERSATION_ID": (()=>SEMATTRS_MESSAGING_CONVERSATION_ID),
    "SEMATTRS_MESSAGING_DESTINATION": (()=>SEMATTRS_MESSAGING_DESTINATION),
    "SEMATTRS_MESSAGING_DESTINATION_KIND": (()=>SEMATTRS_MESSAGING_DESTINATION_KIND),
    "SEMATTRS_MESSAGING_KAFKA_CLIENT_ID": (()=>SEMATTRS_MESSAGING_KAFKA_CLIENT_ID),
    "SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP": (()=>SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP),
    "SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY": (()=>SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY),
    "SEMATTRS_MESSAGING_KAFKA_PARTITION": (()=>SEMATTRS_MESSAGING_KAFKA_PARTITION),
    "SEMATTRS_MESSAGING_KAFKA_TOMBSTONE": (()=>SEMATTRS_MESSAGING_KAFKA_TOMBSTONE),
    "SEMATTRS_MESSAGING_MESSAGE_ID": (()=>SEMATTRS_MESSAGING_MESSAGE_ID),
    "SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES": (()=>SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES),
    "SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES": (()=>SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES),
    "SEMATTRS_MESSAGING_OPERATION": (()=>SEMATTRS_MESSAGING_OPERATION),
    "SEMATTRS_MESSAGING_PROTOCOL": (()=>SEMATTRS_MESSAGING_PROTOCOL),
    "SEMATTRS_MESSAGING_PROTOCOL_VERSION": (()=>SEMATTRS_MESSAGING_PROTOCOL_VERSION),
    "SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY": (()=>SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY),
    "SEMATTRS_MESSAGING_SYSTEM": (()=>SEMATTRS_MESSAGING_SYSTEM),
    "SEMATTRS_MESSAGING_TEMP_DESTINATION": (()=>SEMATTRS_MESSAGING_TEMP_DESTINATION),
    "SEMATTRS_MESSAGING_URL": (()=>SEMATTRS_MESSAGING_URL),
    "SEMATTRS_NET_HOST_CARRIER_ICC": (()=>SEMATTRS_NET_HOST_CARRIER_ICC),
    "SEMATTRS_NET_HOST_CARRIER_MCC": (()=>SEMATTRS_NET_HOST_CARRIER_MCC),
    "SEMATTRS_NET_HOST_CARRIER_MNC": (()=>SEMATTRS_NET_HOST_CARRIER_MNC),
    "SEMATTRS_NET_HOST_CARRIER_NAME": (()=>SEMATTRS_NET_HOST_CARRIER_NAME),
    "SEMATTRS_NET_HOST_CONNECTION_SUBTYPE": (()=>SEMATTRS_NET_HOST_CONNECTION_SUBTYPE),
    "SEMATTRS_NET_HOST_CONNECTION_TYPE": (()=>SEMATTRS_NET_HOST_CONNECTION_TYPE),
    "SEMATTRS_NET_HOST_IP": (()=>SEMATTRS_NET_HOST_IP),
    "SEMATTRS_NET_HOST_NAME": (()=>SEMATTRS_NET_HOST_NAME),
    "SEMATTRS_NET_HOST_PORT": (()=>SEMATTRS_NET_HOST_PORT),
    "SEMATTRS_NET_PEER_IP": (()=>SEMATTRS_NET_PEER_IP),
    "SEMATTRS_NET_PEER_NAME": (()=>SEMATTRS_NET_PEER_NAME),
    "SEMATTRS_NET_PEER_PORT": (()=>SEMATTRS_NET_PEER_PORT),
    "SEMATTRS_NET_TRANSPORT": (()=>SEMATTRS_NET_TRANSPORT),
    "SEMATTRS_PEER_SERVICE": (()=>SEMATTRS_PEER_SERVICE),
    "SEMATTRS_RPC_GRPC_STATUS_CODE": (()=>SEMATTRS_RPC_GRPC_STATUS_CODE),
    "SEMATTRS_RPC_JSONRPC_ERROR_CODE": (()=>SEMATTRS_RPC_JSONRPC_ERROR_CODE),
    "SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE": (()=>SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE),
    "SEMATTRS_RPC_JSONRPC_REQUEST_ID": (()=>SEMATTRS_RPC_JSONRPC_REQUEST_ID),
    "SEMATTRS_RPC_JSONRPC_VERSION": (()=>SEMATTRS_RPC_JSONRPC_VERSION),
    "SEMATTRS_RPC_METHOD": (()=>SEMATTRS_RPC_METHOD),
    "SEMATTRS_RPC_SERVICE": (()=>SEMATTRS_RPC_SERVICE),
    "SEMATTRS_RPC_SYSTEM": (()=>SEMATTRS_RPC_SYSTEM),
    "SEMATTRS_THREAD_ID": (()=>SEMATTRS_THREAD_ID),
    "SEMATTRS_THREAD_NAME": (()=>SEMATTRS_THREAD_NAME),
    "SemanticAttributes": (()=>SemanticAttributes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/semantic-conventions/build/esm/internal/utils.js [app-ssr] (ecmascript)");
;
//----------------------------------------------------------------------------------------------------------
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
// Constant values for SemanticAttributes
//----------------------------------------------------------------------------------------------------------
// Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_AWS_LAMBDA_INVOKED_ARN = 'aws.lambda.invoked_arn';
var TMP_DB_SYSTEM = 'db.system';
var TMP_DB_CONNECTION_STRING = 'db.connection_string';
var TMP_DB_USER = 'db.user';
var TMP_DB_JDBC_DRIVER_CLASSNAME = 'db.jdbc.driver_classname';
var TMP_DB_NAME = 'db.name';
var TMP_DB_STATEMENT = 'db.statement';
var TMP_DB_OPERATION = 'db.operation';
var TMP_DB_MSSQL_INSTANCE_NAME = 'db.mssql.instance_name';
var TMP_DB_CASSANDRA_KEYSPACE = 'db.cassandra.keyspace';
var TMP_DB_CASSANDRA_PAGE_SIZE = 'db.cassandra.page_size';
var TMP_DB_CASSANDRA_CONSISTENCY_LEVEL = 'db.cassandra.consistency_level';
var TMP_DB_CASSANDRA_TABLE = 'db.cassandra.table';
var TMP_DB_CASSANDRA_IDEMPOTENCE = 'db.cassandra.idempotence';
var TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = 'db.cassandra.speculative_execution_count';
var TMP_DB_CASSANDRA_COORDINATOR_ID = 'db.cassandra.coordinator.id';
var TMP_DB_CASSANDRA_COORDINATOR_DC = 'db.cassandra.coordinator.dc';
var TMP_DB_HBASE_NAMESPACE = 'db.hbase.namespace';
var TMP_DB_REDIS_DATABASE_INDEX = 'db.redis.database_index';
var TMP_DB_MONGODB_COLLECTION = 'db.mongodb.collection';
var TMP_DB_SQL_TABLE = 'db.sql.table';
var TMP_EXCEPTION_TYPE = 'exception.type';
var TMP_EXCEPTION_MESSAGE = 'exception.message';
var TMP_EXCEPTION_STACKTRACE = 'exception.stacktrace';
var TMP_EXCEPTION_ESCAPED = 'exception.escaped';
var TMP_FAAS_TRIGGER = 'faas.trigger';
var TMP_FAAS_EXECUTION = 'faas.execution';
var TMP_FAAS_DOCUMENT_COLLECTION = 'faas.document.collection';
var TMP_FAAS_DOCUMENT_OPERATION = 'faas.document.operation';
var TMP_FAAS_DOCUMENT_TIME = 'faas.document.time';
var TMP_FAAS_DOCUMENT_NAME = 'faas.document.name';
var TMP_FAAS_TIME = 'faas.time';
var TMP_FAAS_CRON = 'faas.cron';
var TMP_FAAS_COLDSTART = 'faas.coldstart';
var TMP_FAAS_INVOKED_NAME = 'faas.invoked_name';
var TMP_FAAS_INVOKED_PROVIDER = 'faas.invoked_provider';
var TMP_FAAS_INVOKED_REGION = 'faas.invoked_region';
var TMP_NET_TRANSPORT = 'net.transport';
var TMP_NET_PEER_IP = 'net.peer.ip';
var TMP_NET_PEER_PORT = 'net.peer.port';
var TMP_NET_PEER_NAME = 'net.peer.name';
var TMP_NET_HOST_IP = 'net.host.ip';
var TMP_NET_HOST_PORT = 'net.host.port';
var TMP_NET_HOST_NAME = 'net.host.name';
var TMP_NET_HOST_CONNECTION_TYPE = 'net.host.connection.type';
var TMP_NET_HOST_CONNECTION_SUBTYPE = 'net.host.connection.subtype';
var TMP_NET_HOST_CARRIER_NAME = 'net.host.carrier.name';
var TMP_NET_HOST_CARRIER_MCC = 'net.host.carrier.mcc';
var TMP_NET_HOST_CARRIER_MNC = 'net.host.carrier.mnc';
var TMP_NET_HOST_CARRIER_ICC = 'net.host.carrier.icc';
var TMP_PEER_SERVICE = 'peer.service';
var TMP_ENDUSER_ID = 'enduser.id';
var TMP_ENDUSER_ROLE = 'enduser.role';
var TMP_ENDUSER_SCOPE = 'enduser.scope';
var TMP_THREAD_ID = 'thread.id';
var TMP_THREAD_NAME = 'thread.name';
var TMP_CODE_FUNCTION = 'code.function';
var TMP_CODE_NAMESPACE = 'code.namespace';
var TMP_CODE_FILEPATH = 'code.filepath';
var TMP_CODE_LINENO = 'code.lineno';
var TMP_HTTP_METHOD = 'http.method';
var TMP_HTTP_URL = 'http.url';
var TMP_HTTP_TARGET = 'http.target';
var TMP_HTTP_HOST = 'http.host';
var TMP_HTTP_SCHEME = 'http.scheme';
var TMP_HTTP_STATUS_CODE = 'http.status_code';
var TMP_HTTP_FLAVOR = 'http.flavor';
var TMP_HTTP_USER_AGENT = 'http.user_agent';
var TMP_HTTP_REQUEST_CONTENT_LENGTH = 'http.request_content_length';
var TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = 'http.request_content_length_uncompressed';
var TMP_HTTP_RESPONSE_CONTENT_LENGTH = 'http.response_content_length';
var TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = 'http.response_content_length_uncompressed';
var TMP_HTTP_SERVER_NAME = 'http.server_name';
var TMP_HTTP_ROUTE = 'http.route';
var TMP_HTTP_CLIENT_IP = 'http.client_ip';
var TMP_AWS_DYNAMODB_TABLE_NAMES = 'aws.dynamodb.table_names';
var TMP_AWS_DYNAMODB_CONSUMED_CAPACITY = 'aws.dynamodb.consumed_capacity';
var TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = 'aws.dynamodb.item_collection_metrics';
var TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = 'aws.dynamodb.provisioned_read_capacity';
var TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = 'aws.dynamodb.provisioned_write_capacity';
var TMP_AWS_DYNAMODB_CONSISTENT_READ = 'aws.dynamodb.consistent_read';
var TMP_AWS_DYNAMODB_PROJECTION = 'aws.dynamodb.projection';
var TMP_AWS_DYNAMODB_LIMIT = 'aws.dynamodb.limit';
var TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET = 'aws.dynamodb.attributes_to_get';
var TMP_AWS_DYNAMODB_INDEX_NAME = 'aws.dynamodb.index_name';
var TMP_AWS_DYNAMODB_SELECT = 'aws.dynamodb.select';
var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = 'aws.dynamodb.global_secondary_indexes';
var TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = 'aws.dynamodb.local_secondary_indexes';
var TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = 'aws.dynamodb.exclusive_start_table';
var TMP_AWS_DYNAMODB_TABLE_COUNT = 'aws.dynamodb.table_count';
var TMP_AWS_DYNAMODB_SCAN_FORWARD = 'aws.dynamodb.scan_forward';
var TMP_AWS_DYNAMODB_SEGMENT = 'aws.dynamodb.segment';
var TMP_AWS_DYNAMODB_TOTAL_SEGMENTS = 'aws.dynamodb.total_segments';
var TMP_AWS_DYNAMODB_COUNT = 'aws.dynamodb.count';
var TMP_AWS_DYNAMODB_SCANNED_COUNT = 'aws.dynamodb.scanned_count';
var TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = 'aws.dynamodb.attribute_definitions';
var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = 'aws.dynamodb.global_secondary_index_updates';
var TMP_MESSAGING_SYSTEM = 'messaging.system';
var TMP_MESSAGING_DESTINATION = 'messaging.destination';
var TMP_MESSAGING_DESTINATION_KIND = 'messaging.destination_kind';
var TMP_MESSAGING_TEMP_DESTINATION = 'messaging.temp_destination';
var TMP_MESSAGING_PROTOCOL = 'messaging.protocol';
var TMP_MESSAGING_PROTOCOL_VERSION = 'messaging.protocol_version';
var TMP_MESSAGING_URL = 'messaging.url';
var TMP_MESSAGING_MESSAGE_ID = 'messaging.message_id';
var TMP_MESSAGING_CONVERSATION_ID = 'messaging.conversation_id';
var TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = 'messaging.message_payload_size_bytes';
var TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = 'messaging.message_payload_compressed_size_bytes';
var TMP_MESSAGING_OPERATION = 'messaging.operation';
var TMP_MESSAGING_CONSUMER_ID = 'messaging.consumer_id';
var TMP_MESSAGING_RABBITMQ_ROUTING_KEY = 'messaging.rabbitmq.routing_key';
var TMP_MESSAGING_KAFKA_MESSAGE_KEY = 'messaging.kafka.message_key';
var TMP_MESSAGING_KAFKA_CONSUMER_GROUP = 'messaging.kafka.consumer_group';
var TMP_MESSAGING_KAFKA_CLIENT_ID = 'messaging.kafka.client_id';
var TMP_MESSAGING_KAFKA_PARTITION = 'messaging.kafka.partition';
var TMP_MESSAGING_KAFKA_TOMBSTONE = 'messaging.kafka.tombstone';
var TMP_RPC_SYSTEM = 'rpc.system';
var TMP_RPC_SERVICE = 'rpc.service';
var TMP_RPC_METHOD = 'rpc.method';
var TMP_RPC_GRPC_STATUS_CODE = 'rpc.grpc.status_code';
var TMP_RPC_JSONRPC_VERSION = 'rpc.jsonrpc.version';
var TMP_RPC_JSONRPC_REQUEST_ID = 'rpc.jsonrpc.request_id';
var TMP_RPC_JSONRPC_ERROR_CODE = 'rpc.jsonrpc.error_code';
var TMP_RPC_JSONRPC_ERROR_MESSAGE = 'rpc.jsonrpc.error_message';
var TMP_MESSAGE_TYPE = 'message.type';
var TMP_MESSAGE_ID = 'message.id';
var TMP_MESSAGE_COMPRESSED_SIZE = 'message.compressed_size';
var TMP_MESSAGE_UNCOMPRESSED_SIZE = 'message.uncompressed_size';
var SEMATTRS_AWS_LAMBDA_INVOKED_ARN = TMP_AWS_LAMBDA_INVOKED_ARN;
var SEMATTRS_DB_SYSTEM = TMP_DB_SYSTEM;
var SEMATTRS_DB_CONNECTION_STRING = TMP_DB_CONNECTION_STRING;
var SEMATTRS_DB_USER = TMP_DB_USER;
var SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = TMP_DB_JDBC_DRIVER_CLASSNAME;
var SEMATTRS_DB_NAME = TMP_DB_NAME;
var SEMATTRS_DB_STATEMENT = TMP_DB_STATEMENT;
var SEMATTRS_DB_OPERATION = TMP_DB_OPERATION;
var SEMATTRS_DB_MSSQL_INSTANCE_NAME = TMP_DB_MSSQL_INSTANCE_NAME;
var SEMATTRS_DB_CASSANDRA_KEYSPACE = TMP_DB_CASSANDRA_KEYSPACE;
var SEMATTRS_DB_CASSANDRA_PAGE_SIZE = TMP_DB_CASSANDRA_PAGE_SIZE;
var SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = TMP_DB_CASSANDRA_CONSISTENCY_LEVEL;
var SEMATTRS_DB_CASSANDRA_TABLE = TMP_DB_CASSANDRA_TABLE;
var SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = TMP_DB_CASSANDRA_IDEMPOTENCE;
var SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT;
var SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = TMP_DB_CASSANDRA_COORDINATOR_ID;
var SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = TMP_DB_CASSANDRA_COORDINATOR_DC;
var SEMATTRS_DB_HBASE_NAMESPACE = TMP_DB_HBASE_NAMESPACE;
var SEMATTRS_DB_REDIS_DATABASE_INDEX = TMP_DB_REDIS_DATABASE_INDEX;
var SEMATTRS_DB_MONGODB_COLLECTION = TMP_DB_MONGODB_COLLECTION;
var SEMATTRS_DB_SQL_TABLE = TMP_DB_SQL_TABLE;
var SEMATTRS_EXCEPTION_TYPE = TMP_EXCEPTION_TYPE;
var SEMATTRS_EXCEPTION_MESSAGE = TMP_EXCEPTION_MESSAGE;
var SEMATTRS_EXCEPTION_STACKTRACE = TMP_EXCEPTION_STACKTRACE;
var SEMATTRS_EXCEPTION_ESCAPED = TMP_EXCEPTION_ESCAPED;
var SEMATTRS_FAAS_TRIGGER = TMP_FAAS_TRIGGER;
var SEMATTRS_FAAS_EXECUTION = TMP_FAAS_EXECUTION;
var SEMATTRS_FAAS_DOCUMENT_COLLECTION = TMP_FAAS_DOCUMENT_COLLECTION;
var SEMATTRS_FAAS_DOCUMENT_OPERATION = TMP_FAAS_DOCUMENT_OPERATION;
var SEMATTRS_FAAS_DOCUMENT_TIME = TMP_FAAS_DOCUMENT_TIME;
var SEMATTRS_FAAS_DOCUMENT_NAME = TMP_FAAS_DOCUMENT_NAME;
var SEMATTRS_FAAS_TIME = TMP_FAAS_TIME;
var SEMATTRS_FAAS_CRON = TMP_FAAS_CRON;
var SEMATTRS_FAAS_COLDSTART = TMP_FAAS_COLDSTART;
var SEMATTRS_FAAS_INVOKED_NAME = TMP_FAAS_INVOKED_NAME;
var SEMATTRS_FAAS_INVOKED_PROVIDER = TMP_FAAS_INVOKED_PROVIDER;
var SEMATTRS_FAAS_INVOKED_REGION = TMP_FAAS_INVOKED_REGION;
var SEMATTRS_NET_TRANSPORT = TMP_NET_TRANSPORT;
var SEMATTRS_NET_PEER_IP = TMP_NET_PEER_IP;
var SEMATTRS_NET_PEER_PORT = TMP_NET_PEER_PORT;
var SEMATTRS_NET_PEER_NAME = TMP_NET_PEER_NAME;
var SEMATTRS_NET_HOST_IP = TMP_NET_HOST_IP;
var SEMATTRS_NET_HOST_PORT = TMP_NET_HOST_PORT;
var SEMATTRS_NET_HOST_NAME = TMP_NET_HOST_NAME;
var SEMATTRS_NET_HOST_CONNECTION_TYPE = TMP_NET_HOST_CONNECTION_TYPE;
var SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = TMP_NET_HOST_CONNECTION_SUBTYPE;
var SEMATTRS_NET_HOST_CARRIER_NAME = TMP_NET_HOST_CARRIER_NAME;
var SEMATTRS_NET_HOST_CARRIER_MCC = TMP_NET_HOST_CARRIER_MCC;
var SEMATTRS_NET_HOST_CARRIER_MNC = TMP_NET_HOST_CARRIER_MNC;
var SEMATTRS_NET_HOST_CARRIER_ICC = TMP_NET_HOST_CARRIER_ICC;
var SEMATTRS_PEER_SERVICE = TMP_PEER_SERVICE;
var SEMATTRS_ENDUSER_ID = TMP_ENDUSER_ID;
var SEMATTRS_ENDUSER_ROLE = TMP_ENDUSER_ROLE;
var SEMATTRS_ENDUSER_SCOPE = TMP_ENDUSER_SCOPE;
var SEMATTRS_THREAD_ID = TMP_THREAD_ID;
var SEMATTRS_THREAD_NAME = TMP_THREAD_NAME;
var SEMATTRS_CODE_FUNCTION = TMP_CODE_FUNCTION;
var SEMATTRS_CODE_NAMESPACE = TMP_CODE_NAMESPACE;
var SEMATTRS_CODE_FILEPATH = TMP_CODE_FILEPATH;
var SEMATTRS_CODE_LINENO = TMP_CODE_LINENO;
var SEMATTRS_HTTP_METHOD = TMP_HTTP_METHOD;
var SEMATTRS_HTTP_URL = TMP_HTTP_URL;
var SEMATTRS_HTTP_TARGET = TMP_HTTP_TARGET;
var SEMATTRS_HTTP_HOST = TMP_HTTP_HOST;
var SEMATTRS_HTTP_SCHEME = TMP_HTTP_SCHEME;
var SEMATTRS_HTTP_STATUS_CODE = TMP_HTTP_STATUS_CODE;
var SEMATTRS_HTTP_FLAVOR = TMP_HTTP_FLAVOR;
var SEMATTRS_HTTP_USER_AGENT = TMP_HTTP_USER_AGENT;
var SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = TMP_HTTP_REQUEST_CONTENT_LENGTH;
var SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED;
var SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = TMP_HTTP_RESPONSE_CONTENT_LENGTH;
var SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED;
var SEMATTRS_HTTP_SERVER_NAME = TMP_HTTP_SERVER_NAME;
var SEMATTRS_HTTP_ROUTE = TMP_HTTP_ROUTE;
var SEMATTRS_HTTP_CLIENT_IP = TMP_HTTP_CLIENT_IP;
var SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = TMP_AWS_DYNAMODB_TABLE_NAMES;
var SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = TMP_AWS_DYNAMODB_CONSUMED_CAPACITY;
var SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS;
var SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY;
var SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY;
var SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = TMP_AWS_DYNAMODB_CONSISTENT_READ;
var SEMATTRS_AWS_DYNAMODB_PROJECTION = TMP_AWS_DYNAMODB_PROJECTION;
var SEMATTRS_AWS_DYNAMODB_LIMIT = TMP_AWS_DYNAMODB_LIMIT;
var SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET;
var SEMATTRS_AWS_DYNAMODB_INDEX_NAME = TMP_AWS_DYNAMODB_INDEX_NAME;
var SEMATTRS_AWS_DYNAMODB_SELECT = TMP_AWS_DYNAMODB_SELECT;
var SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES;
var SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES;
var SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE;
var SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = TMP_AWS_DYNAMODB_TABLE_COUNT;
var SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = TMP_AWS_DYNAMODB_SCAN_FORWARD;
var SEMATTRS_AWS_DYNAMODB_SEGMENT = TMP_AWS_DYNAMODB_SEGMENT;
var SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = TMP_AWS_DYNAMODB_TOTAL_SEGMENTS;
var SEMATTRS_AWS_DYNAMODB_COUNT = TMP_AWS_DYNAMODB_COUNT;
var SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = TMP_AWS_DYNAMODB_SCANNED_COUNT;
var SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS;
var SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES;
var SEMATTRS_MESSAGING_SYSTEM = TMP_MESSAGING_SYSTEM;
var SEMATTRS_MESSAGING_DESTINATION = TMP_MESSAGING_DESTINATION;
var SEMATTRS_MESSAGING_DESTINATION_KIND = TMP_MESSAGING_DESTINATION_KIND;
var SEMATTRS_MESSAGING_TEMP_DESTINATION = TMP_MESSAGING_TEMP_DESTINATION;
var SEMATTRS_MESSAGING_PROTOCOL = TMP_MESSAGING_PROTOCOL;
var SEMATTRS_MESSAGING_PROTOCOL_VERSION = TMP_MESSAGING_PROTOCOL_VERSION;
var SEMATTRS_MESSAGING_URL = TMP_MESSAGING_URL;
var SEMATTRS_MESSAGING_MESSAGE_ID = TMP_MESSAGING_MESSAGE_ID;
var SEMATTRS_MESSAGING_CONVERSATION_ID = TMP_MESSAGING_CONVERSATION_ID;
var SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES;
var SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES;
var SEMATTRS_MESSAGING_OPERATION = TMP_MESSAGING_OPERATION;
var SEMATTRS_MESSAGING_CONSUMER_ID = TMP_MESSAGING_CONSUMER_ID;
var SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = TMP_MESSAGING_RABBITMQ_ROUTING_KEY;
var SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = TMP_MESSAGING_KAFKA_MESSAGE_KEY;
var SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = TMP_MESSAGING_KAFKA_CONSUMER_GROUP;
var SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = TMP_MESSAGING_KAFKA_CLIENT_ID;
var SEMATTRS_MESSAGING_KAFKA_PARTITION = TMP_MESSAGING_KAFKA_PARTITION;
var SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = TMP_MESSAGING_KAFKA_TOMBSTONE;
var SEMATTRS_RPC_SYSTEM = TMP_RPC_SYSTEM;
var SEMATTRS_RPC_SERVICE = TMP_RPC_SERVICE;
var SEMATTRS_RPC_METHOD = TMP_RPC_METHOD;
var SEMATTRS_RPC_GRPC_STATUS_CODE = TMP_RPC_GRPC_STATUS_CODE;
var SEMATTRS_RPC_JSONRPC_VERSION = TMP_RPC_JSONRPC_VERSION;
var SEMATTRS_RPC_JSONRPC_REQUEST_ID = TMP_RPC_JSONRPC_REQUEST_ID;
var SEMATTRS_RPC_JSONRPC_ERROR_CODE = TMP_RPC_JSONRPC_ERROR_CODE;
var SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = TMP_RPC_JSONRPC_ERROR_MESSAGE;
var SEMATTRS_MESSAGE_TYPE = TMP_MESSAGE_TYPE;
var SEMATTRS_MESSAGE_ID = TMP_MESSAGE_ID;
var SEMATTRS_MESSAGE_COMPRESSED_SIZE = TMP_MESSAGE_COMPRESSED_SIZE;
var SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = TMP_MESSAGE_UNCOMPRESSED_SIZE;
var SemanticAttributes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_AWS_LAMBDA_INVOKED_ARN,
    TMP_DB_SYSTEM,
    TMP_DB_CONNECTION_STRING,
    TMP_DB_USER,
    TMP_DB_JDBC_DRIVER_CLASSNAME,
    TMP_DB_NAME,
    TMP_DB_STATEMENT,
    TMP_DB_OPERATION,
    TMP_DB_MSSQL_INSTANCE_NAME,
    TMP_DB_CASSANDRA_KEYSPACE,
    TMP_DB_CASSANDRA_PAGE_SIZE,
    TMP_DB_CASSANDRA_CONSISTENCY_LEVEL,
    TMP_DB_CASSANDRA_TABLE,
    TMP_DB_CASSANDRA_IDEMPOTENCE,
    TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT,
    TMP_DB_CASSANDRA_COORDINATOR_ID,
    TMP_DB_CASSANDRA_COORDINATOR_DC,
    TMP_DB_HBASE_NAMESPACE,
    TMP_DB_REDIS_DATABASE_INDEX,
    TMP_DB_MONGODB_COLLECTION,
    TMP_DB_SQL_TABLE,
    TMP_EXCEPTION_TYPE,
    TMP_EXCEPTION_MESSAGE,
    TMP_EXCEPTION_STACKTRACE,
    TMP_EXCEPTION_ESCAPED,
    TMP_FAAS_TRIGGER,
    TMP_FAAS_EXECUTION,
    TMP_FAAS_DOCUMENT_COLLECTION,
    TMP_FAAS_DOCUMENT_OPERATION,
    TMP_FAAS_DOCUMENT_TIME,
    TMP_FAAS_DOCUMENT_NAME,
    TMP_FAAS_TIME,
    TMP_FAAS_CRON,
    TMP_FAAS_COLDSTART,
    TMP_FAAS_INVOKED_NAME,
    TMP_FAAS_INVOKED_PROVIDER,
    TMP_FAAS_INVOKED_REGION,
    TMP_NET_TRANSPORT,
    TMP_NET_PEER_IP,
    TMP_NET_PEER_PORT,
    TMP_NET_PEER_NAME,
    TMP_NET_HOST_IP,
    TMP_NET_HOST_PORT,
    TMP_NET_HOST_NAME,
    TMP_NET_HOST_CONNECTION_TYPE,
    TMP_NET_HOST_CONNECTION_SUBTYPE,
    TMP_NET_HOST_CARRIER_NAME,
    TMP_NET_HOST_CARRIER_MCC,
    TMP_NET_HOST_CARRIER_MNC,
    TMP_NET_HOST_CARRIER_ICC,
    TMP_PEER_SERVICE,
    TMP_ENDUSER_ID,
    TMP_ENDUSER_ROLE,
    TMP_ENDUSER_SCOPE,
    TMP_THREAD_ID,
    TMP_THREAD_NAME,
    TMP_CODE_FUNCTION,
    TMP_CODE_NAMESPACE,
    TMP_CODE_FILEPATH,
    TMP_CODE_LINENO,
    TMP_HTTP_METHOD,
    TMP_HTTP_URL,
    TMP_HTTP_TARGET,
    TMP_HTTP_HOST,
    TMP_HTTP_SCHEME,
    TMP_HTTP_STATUS_CODE,
    TMP_HTTP_FLAVOR,
    TMP_HTTP_USER_AGENT,
    TMP_HTTP_REQUEST_CONTENT_LENGTH,
    TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED,
    TMP_HTTP_RESPONSE_CONTENT_LENGTH,
    TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED,
    TMP_HTTP_SERVER_NAME,
    TMP_HTTP_ROUTE,
    TMP_HTTP_CLIENT_IP,
    TMP_AWS_DYNAMODB_TABLE_NAMES,
    TMP_AWS_DYNAMODB_CONSUMED_CAPACITY,
    TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS,
    TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY,
    TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY,
    TMP_AWS_DYNAMODB_CONSISTENT_READ,
    TMP_AWS_DYNAMODB_PROJECTION,
    TMP_AWS_DYNAMODB_LIMIT,
    TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET,
    TMP_AWS_DYNAMODB_INDEX_NAME,
    TMP_AWS_DYNAMODB_SELECT,
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES,
    TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES,
    TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE,
    TMP_AWS_DYNAMODB_TABLE_COUNT,
    TMP_AWS_DYNAMODB_SCAN_FORWARD,
    TMP_AWS_DYNAMODB_SEGMENT,
    TMP_AWS_DYNAMODB_TOTAL_SEGMENTS,
    TMP_AWS_DYNAMODB_COUNT,
    TMP_AWS_DYNAMODB_SCANNED_COUNT,
    TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS,
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES,
    TMP_MESSAGING_SYSTEM,
    TMP_MESSAGING_DESTINATION,
    TMP_MESSAGING_DESTINATION_KIND,
    TMP_MESSAGING_TEMP_DESTINATION,
    TMP_MESSAGING_PROTOCOL,
    TMP_MESSAGING_PROTOCOL_VERSION,
    TMP_MESSAGING_URL,
    TMP_MESSAGING_MESSAGE_ID,
    TMP_MESSAGING_CONVERSATION_ID,
    TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES,
    TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES,
    TMP_MESSAGING_OPERATION,
    TMP_MESSAGING_CONSUMER_ID,
    TMP_MESSAGING_RABBITMQ_ROUTING_KEY,
    TMP_MESSAGING_KAFKA_MESSAGE_KEY,
    TMP_MESSAGING_KAFKA_CONSUMER_GROUP,
    TMP_MESSAGING_KAFKA_CLIENT_ID,
    TMP_MESSAGING_KAFKA_PARTITION,
    TMP_MESSAGING_KAFKA_TOMBSTONE,
    TMP_RPC_SYSTEM,
    TMP_RPC_SERVICE,
    TMP_RPC_METHOD,
    TMP_RPC_GRPC_STATUS_CODE,
    TMP_RPC_JSONRPC_VERSION,
    TMP_RPC_JSONRPC_REQUEST_ID,
    TMP_RPC_JSONRPC_ERROR_CODE,
    TMP_RPC_JSONRPC_ERROR_MESSAGE,
    TMP_MESSAGE_TYPE,
    TMP_MESSAGE_ID,
    TMP_MESSAGE_COMPRESSED_SIZE,
    TMP_MESSAGE_UNCOMPRESSED_SIZE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for DbSystemValues enum definition
 *
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_DBSYSTEMVALUES_OTHER_SQL = 'other_sql';
var TMP_DBSYSTEMVALUES_MSSQL = 'mssql';
var TMP_DBSYSTEMVALUES_MYSQL = 'mysql';
var TMP_DBSYSTEMVALUES_ORACLE = 'oracle';
var TMP_DBSYSTEMVALUES_DB2 = 'db2';
var TMP_DBSYSTEMVALUES_POSTGRESQL = 'postgresql';
var TMP_DBSYSTEMVALUES_REDSHIFT = 'redshift';
var TMP_DBSYSTEMVALUES_HIVE = 'hive';
var TMP_DBSYSTEMVALUES_CLOUDSCAPE = 'cloudscape';
var TMP_DBSYSTEMVALUES_HSQLDB = 'hsqldb';
var TMP_DBSYSTEMVALUES_PROGRESS = 'progress';
var TMP_DBSYSTEMVALUES_MAXDB = 'maxdb';
var TMP_DBSYSTEMVALUES_HANADB = 'hanadb';
var TMP_DBSYSTEMVALUES_INGRES = 'ingres';
var TMP_DBSYSTEMVALUES_FIRSTSQL = 'firstsql';
var TMP_DBSYSTEMVALUES_EDB = 'edb';
var TMP_DBSYSTEMVALUES_CACHE = 'cache';
var TMP_DBSYSTEMVALUES_ADABAS = 'adabas';
var TMP_DBSYSTEMVALUES_FIREBIRD = 'firebird';
var TMP_DBSYSTEMVALUES_DERBY = 'derby';
var TMP_DBSYSTEMVALUES_FILEMAKER = 'filemaker';
var TMP_DBSYSTEMVALUES_INFORMIX = 'informix';
var TMP_DBSYSTEMVALUES_INSTANTDB = 'instantdb';
var TMP_DBSYSTEMVALUES_INTERBASE = 'interbase';
var TMP_DBSYSTEMVALUES_MARIADB = 'mariadb';
var TMP_DBSYSTEMVALUES_NETEZZA = 'netezza';
var TMP_DBSYSTEMVALUES_PERVASIVE = 'pervasive';
var TMP_DBSYSTEMVALUES_POINTBASE = 'pointbase';
var TMP_DBSYSTEMVALUES_SQLITE = 'sqlite';
var TMP_DBSYSTEMVALUES_SYBASE = 'sybase';
var TMP_DBSYSTEMVALUES_TERADATA = 'teradata';
var TMP_DBSYSTEMVALUES_VERTICA = 'vertica';
var TMP_DBSYSTEMVALUES_H2 = 'h2';
var TMP_DBSYSTEMVALUES_COLDFUSION = 'coldfusion';
var TMP_DBSYSTEMVALUES_CASSANDRA = 'cassandra';
var TMP_DBSYSTEMVALUES_HBASE = 'hbase';
var TMP_DBSYSTEMVALUES_MONGODB = 'mongodb';
var TMP_DBSYSTEMVALUES_REDIS = 'redis';
var TMP_DBSYSTEMVALUES_COUCHBASE = 'couchbase';
var TMP_DBSYSTEMVALUES_COUCHDB = 'couchdb';
var TMP_DBSYSTEMVALUES_COSMOSDB = 'cosmosdb';
var TMP_DBSYSTEMVALUES_DYNAMODB = 'dynamodb';
var TMP_DBSYSTEMVALUES_NEO4J = 'neo4j';
var TMP_DBSYSTEMVALUES_GEODE = 'geode';
var TMP_DBSYSTEMVALUES_ELASTICSEARCH = 'elasticsearch';
var TMP_DBSYSTEMVALUES_MEMCACHED = 'memcached';
var TMP_DBSYSTEMVALUES_COCKROACHDB = 'cockroachdb';
var DBSYSTEMVALUES_OTHER_SQL = TMP_DBSYSTEMVALUES_OTHER_SQL;
var DBSYSTEMVALUES_MSSQL = TMP_DBSYSTEMVALUES_MSSQL;
var DBSYSTEMVALUES_MYSQL = TMP_DBSYSTEMVALUES_MYSQL;
var DBSYSTEMVALUES_ORACLE = TMP_DBSYSTEMVALUES_ORACLE;
var DBSYSTEMVALUES_DB2 = TMP_DBSYSTEMVALUES_DB2;
var DBSYSTEMVALUES_POSTGRESQL = TMP_DBSYSTEMVALUES_POSTGRESQL;
var DBSYSTEMVALUES_REDSHIFT = TMP_DBSYSTEMVALUES_REDSHIFT;
var DBSYSTEMVALUES_HIVE = TMP_DBSYSTEMVALUES_HIVE;
var DBSYSTEMVALUES_CLOUDSCAPE = TMP_DBSYSTEMVALUES_CLOUDSCAPE;
var DBSYSTEMVALUES_HSQLDB = TMP_DBSYSTEMVALUES_HSQLDB;
var DBSYSTEMVALUES_PROGRESS = TMP_DBSYSTEMVALUES_PROGRESS;
var DBSYSTEMVALUES_MAXDB = TMP_DBSYSTEMVALUES_MAXDB;
var DBSYSTEMVALUES_HANADB = TMP_DBSYSTEMVALUES_HANADB;
var DBSYSTEMVALUES_INGRES = TMP_DBSYSTEMVALUES_INGRES;
var DBSYSTEMVALUES_FIRSTSQL = TMP_DBSYSTEMVALUES_FIRSTSQL;
var DBSYSTEMVALUES_EDB = TMP_DBSYSTEMVALUES_EDB;
var DBSYSTEMVALUES_CACHE = TMP_DBSYSTEMVALUES_CACHE;
var DBSYSTEMVALUES_ADABAS = TMP_DBSYSTEMVALUES_ADABAS;
var DBSYSTEMVALUES_FIREBIRD = TMP_DBSYSTEMVALUES_FIREBIRD;
var DBSYSTEMVALUES_DERBY = TMP_DBSYSTEMVALUES_DERBY;
var DBSYSTEMVALUES_FILEMAKER = TMP_DBSYSTEMVALUES_FILEMAKER;
var DBSYSTEMVALUES_INFORMIX = TMP_DBSYSTEMVALUES_INFORMIX;
var DBSYSTEMVALUES_INSTANTDB = TMP_DBSYSTEMVALUES_INSTANTDB;
var DBSYSTEMVALUES_INTERBASE = TMP_DBSYSTEMVALUES_INTERBASE;
var DBSYSTEMVALUES_MARIADB = TMP_DBSYSTEMVALUES_MARIADB;
var DBSYSTEMVALUES_NETEZZA = TMP_DBSYSTEMVALUES_NETEZZA;
var DBSYSTEMVALUES_PERVASIVE = TMP_DBSYSTEMVALUES_PERVASIVE;
var DBSYSTEMVALUES_POINTBASE = TMP_DBSYSTEMVALUES_POINTBASE;
var DBSYSTEMVALUES_SQLITE = TMP_DBSYSTEMVALUES_SQLITE;
var DBSYSTEMVALUES_SYBASE = TMP_DBSYSTEMVALUES_SYBASE;
var DBSYSTEMVALUES_TERADATA = TMP_DBSYSTEMVALUES_TERADATA;
var DBSYSTEMVALUES_VERTICA = TMP_DBSYSTEMVALUES_VERTICA;
var DBSYSTEMVALUES_H2 = TMP_DBSYSTEMVALUES_H2;
var DBSYSTEMVALUES_COLDFUSION = TMP_DBSYSTEMVALUES_COLDFUSION;
var DBSYSTEMVALUES_CASSANDRA = TMP_DBSYSTEMVALUES_CASSANDRA;
var DBSYSTEMVALUES_HBASE = TMP_DBSYSTEMVALUES_HBASE;
var DBSYSTEMVALUES_MONGODB = TMP_DBSYSTEMVALUES_MONGODB;
var DBSYSTEMVALUES_REDIS = TMP_DBSYSTEMVALUES_REDIS;
var DBSYSTEMVALUES_COUCHBASE = TMP_DBSYSTEMVALUES_COUCHBASE;
var DBSYSTEMVALUES_COUCHDB = TMP_DBSYSTEMVALUES_COUCHDB;
var DBSYSTEMVALUES_COSMOSDB = TMP_DBSYSTEMVALUES_COSMOSDB;
var DBSYSTEMVALUES_DYNAMODB = TMP_DBSYSTEMVALUES_DYNAMODB;
var DBSYSTEMVALUES_NEO4J = TMP_DBSYSTEMVALUES_NEO4J;
var DBSYSTEMVALUES_GEODE = TMP_DBSYSTEMVALUES_GEODE;
var DBSYSTEMVALUES_ELASTICSEARCH = TMP_DBSYSTEMVALUES_ELASTICSEARCH;
var DBSYSTEMVALUES_MEMCACHED = TMP_DBSYSTEMVALUES_MEMCACHED;
var DBSYSTEMVALUES_COCKROACHDB = TMP_DBSYSTEMVALUES_COCKROACHDB;
var DbSystemValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_DBSYSTEMVALUES_OTHER_SQL,
    TMP_DBSYSTEMVALUES_MSSQL,
    TMP_DBSYSTEMVALUES_MYSQL,
    TMP_DBSYSTEMVALUES_ORACLE,
    TMP_DBSYSTEMVALUES_DB2,
    TMP_DBSYSTEMVALUES_POSTGRESQL,
    TMP_DBSYSTEMVALUES_REDSHIFT,
    TMP_DBSYSTEMVALUES_HIVE,
    TMP_DBSYSTEMVALUES_CLOUDSCAPE,
    TMP_DBSYSTEMVALUES_HSQLDB,
    TMP_DBSYSTEMVALUES_PROGRESS,
    TMP_DBSYSTEMVALUES_MAXDB,
    TMP_DBSYSTEMVALUES_HANADB,
    TMP_DBSYSTEMVALUES_INGRES,
    TMP_DBSYSTEMVALUES_FIRSTSQL,
    TMP_DBSYSTEMVALUES_EDB,
    TMP_DBSYSTEMVALUES_CACHE,
    TMP_DBSYSTEMVALUES_ADABAS,
    TMP_DBSYSTEMVALUES_FIREBIRD,
    TMP_DBSYSTEMVALUES_DERBY,
    TMP_DBSYSTEMVALUES_FILEMAKER,
    TMP_DBSYSTEMVALUES_INFORMIX,
    TMP_DBSYSTEMVALUES_INSTANTDB,
    TMP_DBSYSTEMVALUES_INTERBASE,
    TMP_DBSYSTEMVALUES_MARIADB,
    TMP_DBSYSTEMVALUES_NETEZZA,
    TMP_DBSYSTEMVALUES_PERVASIVE,
    TMP_DBSYSTEMVALUES_POINTBASE,
    TMP_DBSYSTEMVALUES_SQLITE,
    TMP_DBSYSTEMVALUES_SYBASE,
    TMP_DBSYSTEMVALUES_TERADATA,
    TMP_DBSYSTEMVALUES_VERTICA,
    TMP_DBSYSTEMVALUES_H2,
    TMP_DBSYSTEMVALUES_COLDFUSION,
    TMP_DBSYSTEMVALUES_CASSANDRA,
    TMP_DBSYSTEMVALUES_HBASE,
    TMP_DBSYSTEMVALUES_MONGODB,
    TMP_DBSYSTEMVALUES_REDIS,
    TMP_DBSYSTEMVALUES_COUCHBASE,
    TMP_DBSYSTEMVALUES_COUCHDB,
    TMP_DBSYSTEMVALUES_COSMOSDB,
    TMP_DBSYSTEMVALUES_DYNAMODB,
    TMP_DBSYSTEMVALUES_NEO4J,
    TMP_DBSYSTEMVALUES_GEODE,
    TMP_DBSYSTEMVALUES_ELASTICSEARCH,
    TMP_DBSYSTEMVALUES_MEMCACHED,
    TMP_DBSYSTEMVALUES_COCKROACHDB
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for DbCassandraConsistencyLevelValues enum definition
 *
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL = 'all';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = 'each_quorum';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = 'quorum';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = 'local_quorum';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE = 'one';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO = 'two';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE = 'three';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = 'local_one';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY = 'any';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = 'serial';
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = 'local_serial';
var DBCASSANDRACONSISTENCYLEVELVALUES_ALL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL;
var DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM;
var DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM;
var DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM;
var DBCASSANDRACONSISTENCYLEVELVALUES_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE;
var DBCASSANDRACONSISTENCYLEVELVALUES_TWO = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO;
var DBCASSANDRACONSISTENCYLEVELVALUES_THREE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE;
var DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE;
var DBCASSANDRACONSISTENCYLEVELVALUES_ANY = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY;
var DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL;
var DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL;
var DbCassandraConsistencyLevelValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for FaasTriggerValues enum definition
 *
 * Type of the trigger on which the function is executed.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_FAASTRIGGERVALUES_DATASOURCE = 'datasource';
var TMP_FAASTRIGGERVALUES_HTTP = 'http';
var TMP_FAASTRIGGERVALUES_PUBSUB = 'pubsub';
var TMP_FAASTRIGGERVALUES_TIMER = 'timer';
var TMP_FAASTRIGGERVALUES_OTHER = 'other';
var FAASTRIGGERVALUES_DATASOURCE = TMP_FAASTRIGGERVALUES_DATASOURCE;
var FAASTRIGGERVALUES_HTTP = TMP_FAASTRIGGERVALUES_HTTP;
var FAASTRIGGERVALUES_PUBSUB = TMP_FAASTRIGGERVALUES_PUBSUB;
var FAASTRIGGERVALUES_TIMER = TMP_FAASTRIGGERVALUES_TIMER;
var FAASTRIGGERVALUES_OTHER = TMP_FAASTRIGGERVALUES_OTHER;
var FaasTriggerValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_FAASTRIGGERVALUES_DATASOURCE,
    TMP_FAASTRIGGERVALUES_HTTP,
    TMP_FAASTRIGGERVALUES_PUBSUB,
    TMP_FAASTRIGGERVALUES_TIMER,
    TMP_FAASTRIGGERVALUES_OTHER
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for FaasDocumentOperationValues enum definition
 *
 * Describes the type of the operation that was performed on the data.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_FAASDOCUMENTOPERATIONVALUES_INSERT = 'insert';
var TMP_FAASDOCUMENTOPERATIONVALUES_EDIT = 'edit';
var TMP_FAASDOCUMENTOPERATIONVALUES_DELETE = 'delete';
var FAASDOCUMENTOPERATIONVALUES_INSERT = TMP_FAASDOCUMENTOPERATIONVALUES_INSERT;
var FAASDOCUMENTOPERATIONVALUES_EDIT = TMP_FAASDOCUMENTOPERATIONVALUES_EDIT;
var FAASDOCUMENTOPERATIONVALUES_DELETE = TMP_FAASDOCUMENTOPERATIONVALUES_DELETE;
var FaasDocumentOperationValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_FAASDOCUMENTOPERATIONVALUES_INSERT,
    TMP_FAASDOCUMENTOPERATIONVALUES_EDIT,
    TMP_FAASDOCUMENTOPERATIONVALUES_DELETE
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for FaasInvokedProviderValues enum definition
 *
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = 'alibaba_cloud';
var TMP_FAASINVOKEDPROVIDERVALUES_AWS = 'aws';
var TMP_FAASINVOKEDPROVIDERVALUES_AZURE = 'azure';
var TMP_FAASINVOKEDPROVIDERVALUES_GCP = 'gcp';
var FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD;
var FAASINVOKEDPROVIDERVALUES_AWS = TMP_FAASINVOKEDPROVIDERVALUES_AWS;
var FAASINVOKEDPROVIDERVALUES_AZURE = TMP_FAASINVOKEDPROVIDERVALUES_AZURE;
var FAASINVOKEDPROVIDERVALUES_GCP = TMP_FAASINVOKEDPROVIDERVALUES_GCP;
var FaasInvokedProviderValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD,
    TMP_FAASINVOKEDPROVIDERVALUES_AWS,
    TMP_FAASINVOKEDPROVIDERVALUES_AZURE,
    TMP_FAASINVOKEDPROVIDERVALUES_GCP
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for NetTransportValues enum definition
 *
 * Transport protocol used. See note below.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_NETTRANSPORTVALUES_IP_TCP = 'ip_tcp';
var TMP_NETTRANSPORTVALUES_IP_UDP = 'ip_udp';
var TMP_NETTRANSPORTVALUES_IP = 'ip';
var TMP_NETTRANSPORTVALUES_UNIX = 'unix';
var TMP_NETTRANSPORTVALUES_PIPE = 'pipe';
var TMP_NETTRANSPORTVALUES_INPROC = 'inproc';
var TMP_NETTRANSPORTVALUES_OTHER = 'other';
var NETTRANSPORTVALUES_IP_TCP = TMP_NETTRANSPORTVALUES_IP_TCP;
var NETTRANSPORTVALUES_IP_UDP = TMP_NETTRANSPORTVALUES_IP_UDP;
var NETTRANSPORTVALUES_IP = TMP_NETTRANSPORTVALUES_IP;
var NETTRANSPORTVALUES_UNIX = TMP_NETTRANSPORTVALUES_UNIX;
var NETTRANSPORTVALUES_PIPE = TMP_NETTRANSPORTVALUES_PIPE;
var NETTRANSPORTVALUES_INPROC = TMP_NETTRANSPORTVALUES_INPROC;
var NETTRANSPORTVALUES_OTHER = TMP_NETTRANSPORTVALUES_OTHER;
var NetTransportValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_NETTRANSPORTVALUES_IP_TCP,
    TMP_NETTRANSPORTVALUES_IP_UDP,
    TMP_NETTRANSPORTVALUES_IP,
    TMP_NETTRANSPORTVALUES_UNIX,
    TMP_NETTRANSPORTVALUES_PIPE,
    TMP_NETTRANSPORTVALUES_INPROC,
    TMP_NETTRANSPORTVALUES_OTHER
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for NetHostConnectionTypeValues enum definition
 *
 * The internet connection type currently being used by the host.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI = 'wifi';
var TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED = 'wired';
var TMP_NETHOSTCONNECTIONTYPEVALUES_CELL = 'cell';
var TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = 'unavailable';
var TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = 'unknown';
var NETHOSTCONNECTIONTYPEVALUES_WIFI = TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI;
var NETHOSTCONNECTIONTYPEVALUES_WIRED = TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED;
var NETHOSTCONNECTIONTYPEVALUES_CELL = TMP_NETHOSTCONNECTIONTYPEVALUES_CELL;
var NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE;
var NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN;
var NetHostConnectionTypeValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI,
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED,
    TMP_NETHOSTCONNECTIONTYPEVALUES_CELL,
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE,
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for NetHostConnectionSubtypeValues enum definition
 *
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = 'gprs';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = 'edge';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = 'umts';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = 'cdma';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = 'evdo_0';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = 'evdo_a';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = 'cdma2000_1xrtt';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = 'hsdpa';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = 'hsupa';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = 'hspa';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = 'iden';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = 'evdo_b';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE = 'lte';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = 'ehrpd';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = 'hspap';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM = 'gsm';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = 'td_scdma';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = 'iwlan';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR = 'nr';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = 'nrnsa';
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = 'lte_ca';
var NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS;
var NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE;
var NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS;
var NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA;
var NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0;
var NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A;
var NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT;
var NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA;
var NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA;
var NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA;
var NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN;
var NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B;
var NETHOSTCONNECTIONSUBTYPEVALUES_LTE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE;
var NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD;
var NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP;
var NETHOSTCONNECTIONSUBTYPEVALUES_GSM = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM;
var NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA;
var NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN;
var NETHOSTCONNECTIONSUBTYPEVALUES_NR = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR;
var NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA;
var NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA;
var NetHostConnectionSubtypeValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for HttpFlavorValues enum definition
 *
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_HTTPFLAVORVALUES_HTTP_1_0 = '1.0';
var TMP_HTTPFLAVORVALUES_HTTP_1_1 = '1.1';
var TMP_HTTPFLAVORVALUES_HTTP_2_0 = '2.0';
var TMP_HTTPFLAVORVALUES_SPDY = 'SPDY';
var TMP_HTTPFLAVORVALUES_QUIC = 'QUIC';
var HTTPFLAVORVALUES_HTTP_1_0 = TMP_HTTPFLAVORVALUES_HTTP_1_0;
var HTTPFLAVORVALUES_HTTP_1_1 = TMP_HTTPFLAVORVALUES_HTTP_1_1;
var HTTPFLAVORVALUES_HTTP_2_0 = TMP_HTTPFLAVORVALUES_HTTP_2_0;
var HTTPFLAVORVALUES_SPDY = TMP_HTTPFLAVORVALUES_SPDY;
var HTTPFLAVORVALUES_QUIC = TMP_HTTPFLAVORVALUES_QUIC;
var HttpFlavorValues = {
    HTTP_1_0: TMP_HTTPFLAVORVALUES_HTTP_1_0,
    HTTP_1_1: TMP_HTTPFLAVORVALUES_HTTP_1_1,
    HTTP_2_0: TMP_HTTPFLAVORVALUES_HTTP_2_0,
    SPDY: TMP_HTTPFLAVORVALUES_SPDY,
    QUIC: TMP_HTTPFLAVORVALUES_QUIC
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for MessagingDestinationKindValues enum definition
 *
 * The kind of message destination.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE = 'queue';
var TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC = 'topic';
var MESSAGINGDESTINATIONKINDVALUES_QUEUE = TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE;
var MESSAGINGDESTINATIONKINDVALUES_TOPIC = TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC;
var MessagingDestinationKindValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE,
    TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for MessagingOperationValues enum definition
 *
 * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_MESSAGINGOPERATIONVALUES_RECEIVE = 'receive';
var TMP_MESSAGINGOPERATIONVALUES_PROCESS = 'process';
var MESSAGINGOPERATIONVALUES_RECEIVE = TMP_MESSAGINGOPERATIONVALUES_RECEIVE;
var MESSAGINGOPERATIONVALUES_PROCESS = TMP_MESSAGINGOPERATIONVALUES_PROCESS;
var MessagingOperationValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_MESSAGINGOPERATIONVALUES_RECEIVE,
    TMP_MESSAGINGOPERATIONVALUES_PROCESS
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for RpcGrpcStatusCodeValues enum definition
 *
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_RPCGRPCSTATUSCODEVALUES_OK = 0;
var TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED = 1;
var TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN = 2;
var TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = 3;
var TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = 4;
var TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND = 5;
var TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = 6;
var TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = 7;
var TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = 8;
var TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = 9;
var TMP_RPCGRPCSTATUSCODEVALUES_ABORTED = 10;
var TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = 11;
var TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = 12;
var TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL = 13;
var TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = 14;
var TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS = 15;
var TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = 16;
var RPCGRPCSTATUSCODEVALUES_OK = TMP_RPCGRPCSTATUSCODEVALUES_OK;
var RPCGRPCSTATUSCODEVALUES_CANCELLED = TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED;
var RPCGRPCSTATUSCODEVALUES_UNKNOWN = TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN;
var RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT;
var RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED;
var RPCGRPCSTATUSCODEVALUES_NOT_FOUND = TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND;
var RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS;
var RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED;
var RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED;
var RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION;
var RPCGRPCSTATUSCODEVALUES_ABORTED = TMP_RPCGRPCSTATUSCODEVALUES_ABORTED;
var RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE;
var RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED;
var RPCGRPCSTATUSCODEVALUES_INTERNAL = TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL;
var RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE;
var RPCGRPCSTATUSCODEVALUES_DATA_LOSS = TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS;
var RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED;
var RpcGrpcStatusCodeValues = {
    OK: TMP_RPCGRPCSTATUSCODEVALUES_OK,
    CANCELLED: TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED,
    UNKNOWN: TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN,
    INVALID_ARGUMENT: TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT,
    DEADLINE_EXCEEDED: TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED,
    NOT_FOUND: TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND,
    ALREADY_EXISTS: TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS,
    PERMISSION_DENIED: TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED,
    RESOURCE_EXHAUSTED: TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED,
    FAILED_PRECONDITION: TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION,
    ABORTED: TMP_RPCGRPCSTATUSCODEVALUES_ABORTED,
    OUT_OF_RANGE: TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE,
    UNIMPLEMENTED: TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED,
    INTERNAL: TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL,
    UNAVAILABLE: TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE,
    DATA_LOSS: TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS,
    UNAUTHENTICATED: TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for MessageTypeValues enum definition
 *
 * Whether this is a received or sent message.
 * ---------------------------------------------------------------------------------------------------------- */ // Temporary local constants to assign to the individual exports and the namespaced version
// Required to avoid the namespace exports using the unminifiable export names for some package types
var TMP_MESSAGETYPEVALUES_SENT = 'SENT';
var TMP_MESSAGETYPEVALUES_RECEIVED = 'RECEIVED';
var MESSAGETYPEVALUES_SENT = TMP_MESSAGETYPEVALUES_SENT;
var MESSAGETYPEVALUES_RECEIVED = TMP_MESSAGETYPEVALUES_RECEIVED;
var MessageTypeValues = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$sdk$2d$trace$2d$base$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$internal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConstMap"])([
    TMP_MESSAGETYPEVALUES_SENT,
    TMP_MESSAGETYPEVALUES_RECEIVED
]); //# sourceMappingURL=SemanticAttributes.js.map
}}),

};

//# sourceMappingURL=c68e3_%40opentelemetry_026714a2._.js.map