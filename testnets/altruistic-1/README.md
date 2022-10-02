![empower](https://user-images.githubusercontent.com/104348282/192093493-67779857-653e-4018-8c78-49530690f7a0.png)

# Preparing for launch altruistic-1

**Download genesis altruistic-1**
```bash
rm -rf $HOME/.empowerchain/config/genesis.json && wget https://raw.githubusercontent.com/empowerchain/empowerchain/main/testnets/altruistic-1/genesis.json
```

**Unnsafe-reset-all**
```bash
empowerd tendermint unsafe-reset-all --home $HOME/.empowerchain
```

**Check genesis**
```bash
sha256sum $HOME/.empowerchain/config/genesis.json
```
Result: fcae4a283488be14181fdc55f46705d9e11a32f8e3e8e25da5374914915d5ca8

**Create a service file**
```bash
sudo tee /etc/systemd/system/empowerd.service > /dev/null <<EOF
[Unit]
Description=Haqq Node
After=network.target

[Service]
User=$USER
Type=simple
ExecStart=$(which empowerd) start
Restart=on-failure
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF
```

**Insertion of peers**
```bash
seeds=""
peers="9de92b545638f6baaa7d6d5109a1f7148f093db3@65.108.77.106:26656,4fd5e497563b2e09cfe6f857fb35bdae76c12582@65.108.206.56:26656,fe32c17373fbaa36d9fd86bc1146bfa125bb4f58@5.9.147.185:26656,220fb60b083bc4d443ce2a7a5363f4813dd4aef4@116.202.236.115:26656,225ad85c594d03942a026b90f4dab43f90230ea0@88.99.3.158:26656,2a2932e780a681ddf980594f7eacf5a33081edaf@192.168.147.43:26656,333de3fc2eba7eead24e0c5f53d665662b2ba001@10.132.0.11:26656,4a38efbae54fd1357329bd583186a68ccd6d85f9@94.130.212.252:26656,52450b21f346a4cf76334374c9d8012b2867b842@167.172.246.201:26656,56d05d4ae0e1440ad7c68e52cc841c424d59badd@192.168.1.46:26656,6a675d4f66bfe049321c3861bcfd19bd09fefbde@195.3.223.204:26656,1069820cdd9f5332503166b60dc686703b2dccc5@138.201.141.76:26656,277ff448eec6ec7fa665f68bdb1c9cb1a52ff597@159.69.110.238:26656,3335c9458105cf65546db0fb51b66f751eeb4906@5.189.129.30:26656,bfb56f4cb8361c49a2ac107251f92c0ea5a1c251@192.168.1.177:26656,edc9aa0bbf1fcd7433fcc3650e3f50ab0becc0b5@65.21.170.3:26656,d582bcd8a8f0a20c551098571727726bc75bae74@213.239.217.52:26656,eb182533a12d75fbae1ec32ef1f8fc6b6dd06601@65.109.28.219:26656,b22f0708c6f393bf79acc0a6ca23643fe7d58391@65.21.91.50:26656,e8f6d75ab37bf4f08c018f306416df1e138fd21c@95.217.135.41:26656,ed83872f2781b2bdb282fc2fd790527bcb6ffe9f@192.168.3.17:26656"
sed -i -e 's|^seeds *=.*|seeds = "'$seeds'"|; s|^persistent_peers *=.*|persistent_peers = "'$peers'"|' $HOME/.empowerd/config/config.toml
```

**Run the service file and see the logs of your node**
```bash
sudo systemctl daemon-reload && \
sudo systemctl enable empowerd && \
sudo systemctl restart empowerd && \
sudo journalctl -u empowerd -f -o cat
```

**If you run a node at the beginning of the testnet and you are on genesis, you will get this message**
```bash
Genesis time is in the future. Sleeping until then... genTime=...
```
