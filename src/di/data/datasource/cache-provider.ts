import {Container} from "inversify";
import {TypesMap} from "@/di/container.type";
import {MMKV} from "react-native-mmkv";
import {storage} from "@/data/datasource/cache/impl/mmkv";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<MMKV>(types.mmkv).toConstantValue(storage);
}

export default configure;
