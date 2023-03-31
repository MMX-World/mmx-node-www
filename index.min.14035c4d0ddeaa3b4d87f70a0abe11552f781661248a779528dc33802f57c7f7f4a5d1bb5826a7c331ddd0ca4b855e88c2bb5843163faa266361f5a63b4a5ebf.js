var suggestions=document.getElementById("suggestions"),search=document.getElementById("search");search!==null&&document.addEventListener("keydown",inputFocus);function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/mmx-node-www/docs/wiki/home/",title:"Overview",description:`MMX is a blockchain written from scratch using proven logic from Chia\u0026rsquo;s Proof of Space and SHA256 VDF similar to Solana.
Main features are:
High performance code (1000 transactions per second or more) Custom high-level VM for smart contracts (similar to JavaScript) Variable supply (block reward scales with netspace, but also capped by TX fees) Consistent block times (created every 10 seconds) Native token and NFT support (atomic swaps with standard transactions) Smart contract offers for on-chain trading Energy efficient Proof of Space (same as Chia) Standard ECDSA signatures for seamless integration (same as Bitcoin) MMX is designed to be a blockchain that can be used as an actual currency.`,content:`MMX is a blockchain written from scratch using proven logic from Chia\u0026rsquo;s Proof of Space and SHA256 VDF similar to Solana.
Main features are:
High performance code (1000 transactions per second or more) Custom high-level VM for smart contracts (similar to JavaScript) Variable supply (block reward scales with netspace, but also capped by TX fees) Consistent block times (created every 10 seconds) Native token and NFT support (atomic swaps with standard transactions) Smart contract offers for on-chain trading Energy efficient Proof of Space (same as Chia) Standard ECDSA signatures for seamless integration (same as Bitcoin) MMX is designed to be a blockchain that can be used as an actual currency.
Variable supply will stabilize the price, one of the key properties of any currency.
Thanks to an efficient implementation, it will provide low transaction fees, even at high throughput.
`}),e.add({id:1,href:"/mmx-node-www/docs/wiki/",title:"Wiki",description:"",content:""}),e.add({id:2,href:"/mmx-node-www/docs/wiki/installation/",title:"Instalation",description:`Dependencies # Windows binaries and executables: https://github.com/stotiks/mmx-node/releases
Note: OpenCL packages are optional, ie. ocl-icd-opencl-dev, etc.
Ubuntu Linux:
sudo apt update sudo apt install git cmake build-essential libsecp256k1-dev libsodium-dev libminiupnpc-dev libjemalloc-dev zlib1g-dev ocl-icd-opencl-dev clinfo screen Arch Linux:
sudo pacman -Syu sudo pacman -S base-devel git cmake zlib libsecp256k1 libsodium miniupnpc jemalloc opencl-headers ocl-icd clinfo screen Fedora Linux:
yum install kernel-devel git cmake clinfo gcc gcc-c++ libsecp256k1-devel libsodium-devel miniupnpc-devel jemalloc-devel ocl-icd-devel opencl-headers opencl-utils ghc-zlib OpenCL provides faster and more efficient VDF verification using an integrated or dedicated GPU.`,content:`Dependencies # Windows binaries and executables: https://github.com/stotiks/mmx-node/releases
Note: OpenCL packages are optional, ie. ocl-icd-opencl-dev, etc.
Ubuntu Linux:
sudo apt update sudo apt install git cmake build-essential libsecp256k1-dev libsodium-dev libminiupnpc-dev libjemalloc-dev zlib1g-dev ocl-icd-opencl-dev clinfo screen Arch Linux:
sudo pacman -Syu sudo pacman -S base-devel git cmake zlib libsecp256k1 libsodium miniupnpc jemalloc opencl-headers ocl-icd clinfo screen Fedora Linux:
yum install kernel-devel git cmake clinfo gcc gcc-c++ libsecp256k1-devel libsodium-devel miniupnpc-devel jemalloc-devel ocl-icd-devel opencl-headers opencl-utils ghc-zlib OpenCL provides faster and more efficient VDF verification using an integrated or dedicated GPU.
A standard iGPU found in Intel CPUs with 192 shader cores is barely fast enough. Iris XE graphics found in 11th gen and newer iGPUs may be fast enough. For reference: 1165G7 with 96EU iGPU on a low power laptop can verify VDF in about 2 sec at 24 MH/s timelord speed. This will vary based on number of EUs and chip TDP limits.
If you dont have a fast quad core CPU (\u0026gt;3 GHz) or higher core count CPU, it is required to have a GPU with OpenCL support.
Make sure to be in the video and or render group (depends on distribution) to be able to access a GPU:
sudo adduser $USER video sudo adduser $USER render Building # git clone https://github.com/madMAx43v3r/mmx-node.git cd mmx-node git submodule update --init --recursive ./make_devel.sh To update to latest version:
./update.sh To switch to latest testnet:
rm NETWORK ./update.sh Rebuilding # If you suspect some files might not build properly or if you want to recompile, stop the node then run:
./clean_all.sh ./update.sh This is needed when updating system packages for example.
Windows via WSL # To setup Ubuntu 20.04 in WSL on Windows you can follow the tutorial over here: https://docs.microsoft.com/en-us/learn/modules/get-started-with-windows-subsystem-for-linux/
Make sure to install Ubuntu in step 2: https://www.microsoft.com/store/p/ubuntu/9nblggh4msv6
Then type \u0026ldquo;Ubuntu\u0026rdquo; in the start menu and start it, you will be asked to setup a user and password. After that you can follow the normal instructions for Ubuntu 20.04.
To get OpenCL working in WSL: https://devblogs.microsoft.com/commandline/oneapi-l0-openvino-and-opencl-coming-to-the-windows-subsystem-for-linux-for-intel-gpus/
Using packaged secp256k1 # If you don\u0026rsquo;t have a system package for libsecp256k1:
cd mmx-node/lib/secp256k1 ./autogen.sh ./configure make -j8 cd ../.. ./make_devel.sh -DWITH_SECP256K1=1 Docker # Docker images are available via ghcr.io/madmax43v3r/mmx-node in a few flavours:
edge: Latest commit cpu only edge-amd: Latest commit with amd gpu support edge-nvidia: Latest commit with nvidia gpu support Additionally, each semver tag produces tagged images using the same three flavours from above: \u0026lt;major\u0026gt;.\u0026lt;minor\u0026gt;.\u0026lt;patch\u0026gt;, \u0026lt;major\u0026gt;.\u0026lt;minor\u0026gt; and \u0026lt;major\u0026gt; each with their respective suffix (eg. 0.9.5-amd). latest is set for the latest cpu only semver image.
Each image provides a volume for /data which you can override with your own volume or a mapped path to customize the storage location of the node data.
CPU only # A docker-compose.yml for the cpu only node can look like this:
version: '3' services: node: image: ghcr.io/madmax43v3r/mmx-node:edge restart: unless-stopped volumes: - /some/path/to/mmx/node/data:/data AMD GPU # For amd gpu support please see the following docker-compose.yml:
version: '3' services: node: image: ghcr.io/madmax43v3r/mmx-node:edge-amd restart: unless-stopped group_add: - video - render devices: - /dev/dri:/dev/dri - /dev/kfd:/dev/kfd volumes: - /some/path/to/mmx/node/data:/data Note: - render in group_add might need to be removed, depending on your system.
NVIDIA GPU # For nvidia gpu support please see the following docker-compose.yml:
version: '3' services: node: image: ghcr.io/madmax43v3r/mmx-node:edge-nvidia restart: unless-stopped runtime: nvidia volumes: - /some/path/to/mmx/node/data:/data Note: for nvidia you also need the NVIDIA Container Toolkit installed on the host, for more info please see: https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker
Remote harvester # Running a remote harvester is done by overwriting the CMD of the Dockerfile, for example like this:
version: '3' services: harvester: image: ghcr.io/madmax43v3r/mmx-node:edge restart: unless-stopped volumes: - /some/path/to/mmx/node/data:/data - /some/path/to/disks:/disks command: './run_harvester.sh -n \u0026lt;some ip or hostname here\u0026gt;:11333' Custom storage path # To change the storage path for everything you can set environment variable MMX_HOME to /your/path/ (trailing slash required). By default the current directory is used, ie. mmx-node.
`}),e.add({id:3,href:"/mmx-node-www/docs/wiki/getting-started/",title:"Getting Started",description:`To continue enter the CLI environment:
cd mmx-node source ./activate.sh Creating a Wallet # mmx wallet create [-f filename] The file name argument is optional, by default it is wallet.dat, which is already included in the default configuration.
To use more wallets add the paths to key_files array in config/local/Wallet.json.
To create a wallet with a known seed hash:
mmx wallet create \u0026lt;seed_hash\u0026gt; [-f filename] To create a wallet with a known mnemonic seed:`,content:`To continue enter the CLI environment:
cd mmx-node source ./activate.sh Creating a Wallet # mmx wallet create [-f filename] The file name argument is optional, by default it is wallet.dat, which is already included in the default configuration.
To use more wallets add the paths to key_files array in config/local/Wallet.json.
To create a wallet with a known seed hash:
mmx wallet create \u0026lt;seed_hash\u0026gt; [-f filename] To create a wallet with a known mnemonic seed:
mmx wallet create --mnemonic word1 word2 ... [-f filename] To get the mnemonic seed from a wallet (with Node / Wallet already running):
mmx wallet get seed [-j index] Note: A Node / Wallet restart is needed to pick up a new wallet.
Note: Alternatively you can create a wallet in the GUI now: http://localhost:11380/gui/#/wallet/create
Configuration # Note: Capitalization of configuration files matters. Note: Any config changes require a node restart to become effective.
Custom Farmer Reward Address # Create / Edit file config/local/Farmer.json:
{ \u0026quot;reward_addr\u0026quot;: \u0026quot;mmx1...\u0026quot; } By default the first address of the first wallet is used.
Custom Timelord Reward Address # Create / Edit file config/local/TimeLord.json:
{ \u0026quot;reward_addr\u0026quot;: \u0026quot;mmx1...\u0026quot; } Fixed Node Peers # Create / Edit file config/local/Router.json:
{ \u0026quot;fixed_peers\u0026quot;: [\u0026quot;192.168.0.123\u0026quot;, \u0026quot;more\u0026quot;] } Enable Timelord # echo true \u0026gt; config/local/timelord Custom data directory # To have the blockchain and DB stored in a custom directory you can set environment variable MMX_DATA (for example):
export MMX_DATA=/mnt/mmx_data/ A node restart is required. Optionally the previous testnetX folder can be copied to the new MMX_DATA path (after stopping the node), to avoid having to sync from scratch again.
Plotting # To get the farmer and pool keys for plotting:
mmx wallet keys [-j index] The node needs to be running for this command to work. (-j to specify the index of a non-default wallet)
Note: During plotting, the node does not need to be running (the plotter doesn\u0026rsquo;t even need internet connection).
Once you\u0026rsquo;re ready to make MMX plots, run the latest version of my plotter and add the parameter \u0026ldquo;-x 11337\u0026rdquo;.
Download plotter here: https://github.com/madMAx43v3r/chia-plotter/
It will show the following output at the beginning to confirm the new plot format (from testnet3 onwards):
Network Port: 11337 [MMX] (unique) The new plots will have a name starting with \u0026ldquo;plot-mmx-\u0026rdquo;. Plots created before that version are only valid on testnet1/2.
The minimum K size for mainnet will be k30, for testnets it is k26. The plots from testnet3 and onwards can be reused for mainnet later. However there will be a time limit for k30 and k31, ~3 years for k30 and ~6 years for k31, to prevent grinding attacks in the future.
To add a plot directory add the path to plot_dirs array in config/local/Harvester.json, for example:
{ \u0026quot;plot_dirs\u0026quot;: [ \u0026quot;/mnt/drive1/plots/\u0026quot;, \u0026quot;/mnt/drive2/plots/\u0026quot;, \u0026quot;C:/windows/path/example/\u0026quot; ] } Directories are searched recursively by default. To disable recursive search you can set recursive_search to false in Harvester.json.
For the above reason, avoid adding a root directory (e.g. H:). Instead, make a folder and place all your plots in there (e.g. H:\\MMX Plots).
Running a Node # First perform the installation and setup steps.
To run a node for the current testnet:
./run_node.sh You can enable port forwarding on TCP port 12338, if you want to help out the network and accept incoming connections.
To set a custom storage path for the blockchain, wallet files, etc:
export MMX_HOME=/your/path/ Wallet files will end up in MMX_HOME, everything else in a testnetX subfolder. By default MMX_HOME is not set, so it\u0026rsquo;s the current directory.
Reducing network traffic # If you have a slow internet connection or want to reduce traffic in general you can lower the number of connections in config/local/Router.json. For example to run at the bare recommended minimum:
{ \u0026quot;num_peers_out\u0026quot;: 4, \u0026quot;max_connections\u0026quot;: 4 } num_peers_out is the maximum number of outgoing connections to synced peers. max_connections is the maximum total number of connections. Keep in mind this will increase your chances of losing sync.
Another more drastic measure is to disable relaying messages to other nodes, by setting do_relay to false in config/local/Router.json. However this will hurt the network, so please only disable it if absolutely necessary.
Running in background # To run a node in the background you can enter a screen session:
screen -S node (start node as above) \u0026lt;Ctrl+A\u0026gt; + D (to detach) screen -r node (to attach again) Recover from forking # To re-sync starting from a specific height: ./run_node.sh --Node.replay_height \u0026lt;height\u0026gt;. Or while running: mmx node revert \u0026lt;height\u0026gt;. This is needed if for some reason you forked from the network. Just subtract 500 or 1000 blocks from the current height you are stuck at. To re-sync from scratch delete block_chain.dat and db folder in testnetX, or run mmx node revert 0.
Switching to latest testnet # After stopping the node:
rm NETWORK ./update.sh ./run_node.sh Blockchain data are now stored in testnetX folder by default.
Access WebGUI # To access WebGUI, go to: http://localhost:11380/gui/
Check $MMX_HOME/PASSWD for the login password, it\u0026rsquo;s automatically generated at first launch.
Only available on localhost, because of full access to your wallet.
`}),e.add({id:4,href:"/mmx-node-www/docs/wiki/cli-commands/",title:"CLI Commands",description:`To use the CLI:
cd mmx-node source ./activate.sh For Windows: Use the shortcut in the start menu or manually run mmx_cmd.cmd from a terminal/command prompt.
To run any mmx commands (except mmx wallet create), the node needs to be running. See Getting Started to read on how to start it.
Node CLI # To check on the node: mmx node info
To check on the peers: mmx node peers
To check on a transaction: mmx node tx \u0026lt;txid\u0026gt;`,content:`To use the CLI:
cd mmx-node source ./activate.sh For Windows: Use the shortcut in the start menu or manually run mmx_cmd.cmd from a terminal/command prompt.
To run any mmx commands (except mmx wallet create), the node needs to be running. See Getting Started to read on how to start it.
Node CLI # To check on the node: mmx node info
To check on the peers: mmx node peers
To check on a transaction: mmx node tx \u0026lt;txid\u0026gt;
To show current node height: mmx node get height
To dump a transaction: mmx node get tx \u0026lt;txid\u0026gt;
To dump a contract: mmx node get contract \u0026lt;address\u0026gt;
To get balance for an address: mmx node get balance \u0026lt;address\u0026gt; \u0026lt;options\u0026gt;
-x \u0026lt;currency\u0026gt; To get raw balance for an address: mmx node get amount \u0026lt;address\u0026gt; \u0026lt;options\u0026gt;
-x \u0026lt;currency\u0026gt; To dump a block: mmx node get block \u0026lt;height\u0026gt;
To dump a block header: mmx node get header \u0026lt;height\u0026gt;
To show connected peers: mmx node get peers
To show estimated netspace: mmx node get netspace
To show circulating coin supply: mmx node get supply
To call a smart contract const function: mmx node call
To show smart contract state variables: mmx node read
To dump all storage of a smart contract: mmx node dump
To dump assembly code of a smart contract: mmx node dump_code
To fetch a block from a peer: mmx node fetch block \u0026lt;peer\u0026gt; \u0026lt;height\u0026gt;
To fetch a block header from a peer: mmx node fetch header \u0026lt;peer\u0026gt; \u0026lt;height\u0026gt;
To check the balance of an address: mmx node balance \u0026lt;address\u0026gt;
To check the history of an address since a particlar block height: mmx node history \u0026lt;address\u0026gt; \u0026lt;block_height\u0026gt;
To show all offers: mmx node offers [open | closed]
To force a re-sync: mmx node sync
To replay/revert to an earlier block height: mmx node revert \u0026lt;height\u0026gt;
Wallet CLI # To show everything in a wallet: mmx wallet show
To show wallet balances: mmx wallet show balance
To show wallet contracts: mmx wallet show contracts
To show wallet offers: mmx wallet show offers
To get a specific wallet address: mmx wallet get address
To get a specific wallet balance: mmx wallet get balance
To get a specific raw wallet balance: mmx wallet get amount
To get a list of all contract addresses: mmx wallet get contracts
To get the mnemonic seed words of a wallet: mmx wallet get seed
To show wallet activity for last N heights: mmx wallet log -N
To transfer funds: mmx wallet send \u0026lt;options\u0026gt;
-a \u0026lt;amount to send, 1.23\u0026gt; -r \u0026lt;tx fee multiplier\u0026gt; -t \u0026lt;destination address\u0026gt; -x \u0026lt;currency\u0026gt; To withdraw funds from a contract: mmx wallet send_from
-s \u0026lt;source address\u0026gt; To transfer an NFT, same as sending with one satoshi: mmx wallet transfer
To create an offer on the chain: mmx wallet offer
(-x / -z default MMX) -a \u0026lt;bid amount\u0026gt; -b \u0026lt;ask amount\u0026gt; -x \u0026lt;bid currency\u0026gt; -z \u0026lt;ask currency\u0026gt; To accept an offer: mmx wallet accept \u0026lt;address\u0026gt;
To mint tokens: mmx wallet mint
-a \u0026lt;amount\u0026gt; -t \u0026lt;destination\u0026gt; -x \u0026lt;currency\u0026gt; To deploy a contract: mmx wallet deploy \u0026lt;file\u0026gt;
To mutate a contract: mmx wallet mutate \u0026lt;function\u0026gt; \u0026lt;args\u0026gt;
-x \u0026lt;contract\u0026gt; To execute a smart contract function: mmx wallet exec \u0026lt;function\u0026gt; \u0026lt;args\u0026gt;
-x \u0026lt;contract\u0026gt; To create a new wallet: mmx wallet create -f [file_name]
To restore a wallet from a seed hash: mmx wallet create [seed hash]
To restore a wallet from a set of 24 mnemonic words: mmx wallet create --mnemonic [word1 word2 word3....]
To show all wallets and their index: mmx wallet accounts
To get farmer / pool keys for plotting: mmx wallet keys
To lock a wallet if passphase enabled: mmx wallet lock
To unlock a wallet with passphrase: mmx wallet unlock
To use a non-default wallet, specify -j \u0026lt;index\u0026gt; in combination with the above commands. \u0026lt;index\u0026gt; start at 0, which is the default.
Farmer CLI # To check on the farm: mmx farm info
To get total space in bytes: mmx farm get space
To show plot directories: mmx farm get dirs
To add plot directories: mmx farm add \u0026lt;dir\u0026gt;
To remove plot directories: mmx farm remove \u0026lt;dir\u0026gt;
To reload plots: mmx farm reload
Harvester CLI # To check on the harvester: mmx harvester info
To get harvester space in bytes: mmx harvester get space
To show plot directories: mmx harvester get dirs
To add plot directories: mmx harvester add \u0026lt;dir\u0026gt;
To remove plot directories: mmx harvester remove \u0026lt;dir\u0026gt;
To reload plots: mmx harvester reload
`}),e.add({id:5,href:"/mmx-node-www/docs/wiki/access-webgui/",title:"Access WebGUI",description:`To access WebGUI, go to: http://localhost:11380/gui/
Check $MMX_HOME/PASSWD for the login password, it\u0026rsquo;s automatically generated at first launch.
Only available on localhost, because of full access to your wallet.`,content:`To access WebGUI, go to: http://localhost:11380/gui/
Check $MMX_HOME/PASSWD for the login password, it\u0026rsquo;s automatically generated at first launch.
Only available on localhost, because of full access to your wallet.
`}),e.add({id:6,href:"/mmx-node-www/docs/wiki/optimizations-for-vdf-verification/",title:"Optimizations for VDF Verification",description:`Using OpenCL is an optional (but highly recommended) feature for farming MMX. Offloading the verification of the VDF from the CPU to an OpenCL accelerated GPU (even an APU with integrated GPU) can increase both performance and power efficiency.
Example Hardware and times spreadsheet (go to current testnet tab): Google Docs
During initial blockchain sync, CPU usage will be very high in any case.
Once the blockchain is synced, you will see these lines:`,content:`Using OpenCL is an optional (but highly recommended) feature for farming MMX. Offloading the verification of the VDF from the CPU to an OpenCL accelerated GPU (even an APU with integrated GPU) can increase both performance and power efficiency.
Example Hardware and times spreadsheet (go to current testnet tab): Google Docs
During initial blockchain sync, CPU usage will be very high in any case.
Once the blockchain is synced, you will see these lines:
[Node] INFO: Verified VDF for height 239702, delta = 10.111297 sec, took 0.089002 sec. which indicates that your node is now verifying the current VDFs as they are received. Your GPU would now be utilized every ~8 seconds.
If OpenCL is not being utilized for VDF verification, you should see relatively high CPU usage across all cores every ~8 seconds.
If you are running a Timelord (the default is OFF), you will see high CPU usage on at least 2 cores in any case, even if your GPU is used for verification.
OpenCL for Intel iGPUs # Intel iGPUs prior to 11th gen will most likely not be sufficient for mainnet.
Ubuntu 20.04, 21.04
sudo apt install intel-opencl-icd Ubuntu ppa for 18.04, 20.04, 21.04
sudo add-apt-repository ppa:intel-opencl/intel-opencl sudo apt update sudo apt install intel-opencl-icd If the above doesn\u0026rsquo;t work, you can try installing the latest drivers: https://dgpu-docs.intel.com/installation-guides/ubuntu/ubuntu-focal.html
Make sure your iGPU is not somehow disabled, like here for example: https://community.hetzner.com/tutorials/howto-enable-igpu
OpenCL for AMD GPUs # Ubuntu:
Download installer (with wget) from https://repo.radeon.com/amdgpu-install/latest/ubuntu/
Change directory to the Download folder and install with sudo dpkg -i amdgpu-install*.deb
sudo apt install rocm-opencl
Follow on-screen instructions and then run:
sudo apt update sudo apt upgrade Arch Linux:
sudo pacman -S opencl-amd Mesa drivers with opencl drivers do seem to work, but performance is very poor (VDF verification \u0026gt;4x longer).
To install mesa drivers:
Ubuntu:
sudo apt install mesa-opencl-icd Arch:
sudo pacman -S mesa mesa-utils opencl-mesa Windows: https://google.com/search?q=amd+graphics+driver+download
OpenCL for Nvidia GPUs # Install Nvidia drivers.
There\u0026rsquo;s an issue on Windows Laptops which requires a config file config/local/opencl/platform with contents \u0026quot;NVIDIA CUDA\u0026quot; (including the quotes) to make it detect the GPU (opencl_device should be 0 in this case as well).
Ubuntu # sudo apt install nvidia-driver-470 Version 470 still works with older Kepler cards like a Quadro K2000.
Arch Linux # sudo pacman -S nvidia nvidia-utils opencl-nvidia For older GPUs, use drivers from the AUR:
Kepler series newest driver: 470xx yay -S nvidia-470xx-dkms nvidia-470xx-utils opencl-nvidia-470xx Fermi series newest driver: 390xx yay -S nvidia-390xx-dkms nvidia-390xx-utils opencl-nvidia-390xx AVX2 Optimizations # VDF verification is now optimized for CPUs that support AVX2 and acceleration is done automatically when starting a node.
To disable VDF verification done on GPU with OpenCL and force the CPU to do it, run ./run_node.sh --Node.opencl_device -1 when running your node.
Or for a more permanent solution, edit your Node.json file in ~/config/local/ and set opencl_device value to -1.
`}),e.add({id:7,href:"/mmx-node-www/docs/wiki/remote-services/",title:"Remote Services",description:`These steps are provided for farming on many machines on a single local area network, or even over a wide area network.
Remote Farmer # To run a remote farmer with it\u0026rsquo;s own wallet and harvester:
./run_farmer.sh -n node.ip:11330 Alternatively to set the node address permanently: echo node.ip:11330 \u0026gt; config/local/node
To disable the built-in farmer in the node: echo false \u0026gt; config/local/farmer
Remote Harvester # To run a remote harvester, while connecting to a node:`,content:`These steps are provided for farming on many machines on a single local area network, or even over a wide area network.
Remote Farmer # To run a remote farmer with it\u0026rsquo;s own wallet and harvester:
./run_farmer.sh -n node.ip:11330 Alternatively to set the node address permanently: echo node.ip:11330 \u0026gt; config/local/node
To disable the built-in farmer in the node: echo false \u0026gt; config/local/farmer
Remote Harvester # To run a remote harvester, while connecting to a node:
./run_harvester.sh -n node.ip:11330 Alternatively to set the node address permanently: echo node.ip:11330 \u0026gt; config/local/node
To run a remote harvester, while connecting to a remote farmer:
./run_harvester.sh -n farmer.ip:11333 Alternatively to set the farmer address permanently: echo farmer.ip:11333 \u0026gt; config/local/node
To disable the built-in harvester in the node: echo false \u0026gt; config/local/harvester
Remote Timelord # To run a remote timelord:
./run_timelord.sh -n node.ip:11330 Alternatively to set the node address permanently: echo node.ip:11330 \u0026gt; config/local/node
To disable the built-in timelord in the node: echo false \u0026gt; config/local/timelord
Remote Wallet # To run a remote wallet:
./run_wallet.sh -n node.ip:11330 Alternatively to set the node address permanently: echo node.ip:11330 \u0026gt; config/local/node
To disable the built-in wallet in the node:
echo false \u0026gt; config/local/wallet echo false \u0026gt; config/local/farmer Remote connections over public networks # To use the remote services over a public network such the internet you should use an SSH tunnel, instead of opening port 11330 to the world.
To run an SSH tunnel to connect to a node from another machine (such as from a remote farmer):
ssh -N -L 11330:localhost:11330 user@node.ip This will forward local port 11330 to port 11330 on the node\u0026rsquo;s machine.
`}),e.add({id:8,href:"/mmx-node-www/docs/wiki/creating-token-contracts/",title:"Creating Token Contracts",description:"Token Contracts # Token contracts can be created either as a mint by owner only token, a mint by owner and staking token, or an ownerless staking token. The advantage of the mint only token is that the owner address controls the supply of the token, similarly for the mint and stake token, the owner can create an initial supply for immediate use, and then future supply can be provided by staking.",content:`Token Contracts # Token contracts can be created either as a mint by owner only token, a mint by owner and staking token, or an ownerless staking token. The advantage of the mint only token is that the owner address controls the supply of the token, similarly for the mint and stake token, the owner can create an initial supply for immediate use, and then future supply can be provided by staking. The advantage of the ownerless staking token is that there is no fixed supply, and new tokens can only be created through staking. Unlike the mint and stake, the token creator can not create a bunch of tokens out of thin air.
To deploy any contract to the blockchain, you will need to have a small amount of mmx in your wallet.
Example # { \u0026quot;__type\u0026quot;: \u0026quot;mmx.contract.Token\u0026quot;, \u0026quot;name\u0026quot;: \u0026quot;Memecoin\u0026quot;, \u0026quot;symbol\u0026quot;: \u0026quot;MEME\u0026quot;, \u0026quot;decimals\u0026quot;: 6, \u0026quot;owner\u0026quot;: \u0026quot;mmx1mqxtcngn4lv0y3n30c5mw4lhh4x7h7zjrs0r2qynethgy20fayaq3ngsm8\u0026quot; } In this example for memecoin, the decimals is set to 6 (1 million mojo equivalent) which sets 1 memecoin to the same scale as 1 mmx. The owner address must be set to a wallet address that you control, or else you won\u0026rsquo;t be able to use the contract to mint tokens. This gets saved as a json file, and can then be deployed with mmx wallet deploy /path/to/file.json. When deployed, the contract will appear in the owner\u0026rsquo;s wallet and tokens can be minted with mmx wallet mint -a \u0026lt;amount\u0026gt; -x \u0026lt;token contract address\u0026gt; -t \u0026lt;target wallet address\u0026gt;.
`}),e.add({id:9,href:"/mmx-node-www/docs/wiki/frequently-asked-questions/",title:"FAQ",description:`When is mainnet launch? # Current latest estimate is Q2 2023.
What is MMX? What problem is MMX trying to solve/how is it solving any problems any differently than other blockchains? # MMX is (not) just another blockchain with a native token on it. Its code is written from scratch, using proven logic from Chia\u0026rsquo;s Proof of Space and improved SHA256 VDF similar to Solana. It\u0026rsquo;s designed to be secure, fast, high throughput and energy efficient.`,content:`When is mainnet launch? # Current latest estimate is Q2 2023.
What is MMX? What problem is MMX trying to solve/how is it solving any problems any differently than other blockchains? # MMX is (not) just another blockchain with a native token on it. Its code is written from scratch, using proven logic from Chia\u0026rsquo;s Proof of Space and improved SHA256 VDF similar to Solana. It\u0026rsquo;s designed to be secure, fast, high throughput and energy efficient. MMX is truly decentralized, such that any transaction that is included into the blockchain costs transaction fee. This economically prevents grinding attack to the network. In order to help stabilize its price, farmers are rewarded variably, depending on netspace plus transaction fees on that block. By controlling the coin supply, it helps to prevent inflation and deflation. The native token MMX is designed to be used as an everyday currency.
How does the variable reward model work? # The (simplified) variable reward function is as follows: reward = max(difficulty * const_factor, min_reward) + TX fees Where min_reward and const_factor are fixed at launch. This means that when a farmer wins a block, the reward they receive will be the higher of the 2 values: the minimum block reward (0.25 MMX) or the calculated farmer reward based on total netspace, plus the transaction fees for that block. There is no limit on coins produced, and instead the value of the coin will depend on cost to farm as well as actual use of the coin.
Is there any pre-farm? # No, but starting from testnet8 (starting from block 25,000), we incentivize farmers who participate, contribute and report bugs. For every block won, the reward address is recorded and will be paid a fixed 0.25 MMX at the genesis block in mainnet. This also applies for testnet9 and subsequent testnets before mainnet launch.
How many MMX coins do I get per block reward? # It depends on the total netspace:
Netspace Reward \u0026lt; 250 PB	0.25 MMX \u0026gt; 250 PB	1.00 MMX / EB Don\u0026rsquo;t forget to account for dev fees.
Is there dev fees? # Yes. On mainnet, there will be a dev fee of 10%. Note that farmer reward = block reward + transaction fees for that block. If the block is won by a virtual plot, the farmer only gets transaction fees, no block reward.
How do you intend to prevent a replotting/grinding attack? # The replotting attack isn\u0026rsquo;t so much an attack as it is an alternative way to provide proofs. Continuously replotting means using a very fast system to constantly make new plots that will always pass the filter, then dumping those plots out of memory when the next plot filter arrives. This would be the equivalent of having enough plots to always pass the plot filter. For a plot filter of 512, this means having 512 plots. While it could theoretically be possible to conduct such an attack with consumer hardware for k29 right now, it is not economically feasible to do so because it\u0026rsquo;s much cheaper to buy storage for 512 plots. Passing the plot filter does not mean providing a successful proof and winning the block. To maintain MMX as proof of space and prevent it from turning into a proof of work grind, k30 will only be the minimum valid k-size for 3 years after mainnet launch, and k31 for 3 years beyond that and so on. In the event that technology advances faster than expected and grindable hardware is affordable sooner than expected, the plot filter can be reduced, thus lowering the number of \u0026ldquo;simulated\u0026rdquo; plots each fast plot is worth.
If I start plotting now for testnet8/9, can I use the same plots to farm on mainnet? # Yes. All plots that were made with -x 11337 will work on mainnet.
What kind of computer do I need to run MMX operations? # To make MMX plots, you need a computer with many fast cores/threads and high disk I/O. Some users use NVME SSDs to plot, some advanced users have even replaced NVME SSDs with RAM disk. (See below)
To farm plotted MMX plots, you only need a computer with 4GB RAM and a decently fast CPU, like a dual-core Pentium or even Celeron. Most CPUs from 2015+ can run MMX harvester. In a local area network, you can run multiple harvester machines connected to one node.
However the node has to verify VDFs, which requires either a fast CPU or a (decent) GPU.
What is VDF and why do we need to do it as a farmer? # A Verifiable Delay Function, is the Proof of Time part in Proof of Space and Time. It is referred to as a proof that a sequential function was executed a certain number of times.
Verifiable: A verifier can verify the proof in a shorter amount of time than it took to generate it.
Delay: It proofs that a certain amount of real time has elapsed.
Function: This means it’s deterministic. Computing a VDF with an input x always yields the same result y.
Can I use Chia/Chives plots to farm MMX? # No. Like Chives, MMX is using unique plots to differentiate itself from Chia. If the value of the coin rises, additional netspace will be plotted, which will increase the production of new coins, which will re-balance the coin value in a feedback loop.
I don\u0026rsquo;t have a lot of free space that I can allocate for MMX plots. Is it worth to farm MMX if I only have xxx TB? # I\u0026rsquo;d say it depends on your goals, the netspace on mainnet and your space allocation. But if you want to estimate your time to win MMX per day, you can use this calculator:
https://docs.google.com/spreadsheets/d/1io9pQs4lQiGp3R0vszy9lF_cCNTmY32g5ECSlmFEjPE/
Plotting # How do I get started? How do I make/create MMX plots? # There are 2 plotters available at this time of writing. The original and official madMAx plotter for Linux can be downloaded at: https://github.com/madMAx43v3r/chia-plotter/
For Windows, download the MMX node and use the built-in plotter from the GUI or command line.
A modified/forked versions of Bladebit plotter are available to create MMX plots, though they are still in alpha/beta testing phase. The first one is in-RAM Linux-only, k32-only Bladebit alpha and maintained by Paspy:
https://github.com/paspy/bladebit/tree/mmx_support
The second is Bladebit disk beta forked and maintained by zcomputerwiz:
https://github.com/zcomputerwiz/bladebit/releases/
Make sure to specify -x 11337, to create plots for MMX.
For -p [poolkey] and -f [farmerkey], see output of mmx wallet keys.
In order to do this, first you have to create a wallet. (See below how to create a wallet)
To plot for pools, specify -c [contract address] instead of -p [poolkey].
For k32 plot size, [tmpdir] needs about 220 GiB space and it will handle about 25% of all writes. [tmpdir2] needs about 110 GiB space and ideally is a RAM drive - it will handle about 75% of all writes. Combined (tmpdir + tmpdir2) peak disk usage is less than 256 GiB.
Usage: chia_plot [OPTION\u0026hellip;]
-k, \u0026ndash;size arg	K size (default = 32, k \u0026lt;= 32)
-x, \u0026ndash;port arg	Network port (default = 8444, chives = 9699, mmx = 11337)
-n, \u0026ndash;count arg	Number of plots to create (default = 1, -1 = infinite)
-r, \u0026ndash;threads arg	Number of threads (default = 4)
-u, \u0026ndash;buckets arg	Number of buckets (default = 256)
-v, \u0026ndash;buckets3 arg	Number of buckets for phase 3+4 (default = buckets)
-t, \u0026ndash;tmpdir arg	Temporary directory, needs ~220 GiB (default = $PWD)
-2, \u0026ndash;tmpdir2 arg	Temporary directory 2, needs ~110 GiB [RAM] (default = [tmpdir])
-d, \u0026ndash;finaldir arg	Final directory to copy plot in parallel (default = [tmpdir])
-s, \u0026ndash;stagedir arg	Stage directory to write plot file (default = [tmpdir])
-w, \u0026ndash;waitforcopy	Wait for copy to start next plot
-p, \u0026ndash;poolkey arg	Pool Public Key (48 bytes)
-c, \u0026ndash;contract arg	Pool Contract Address (62 chars)
-f, \u0026ndash;farmerkey arg	Farmer Public Key (48 bytes)
-G, \u0026ndash;tmptoggle	Alternate tmpdir/tmpdir2 (default = false)
-D, \u0026ndash;directout	Create plot directly in finaldir (default = false)
-Z, \u0026ndash;unique	Make unique plot (default = false)
-K, \u0026ndash;rmulti2 arg	Thread multiplier for P2 (default = 1)
\u0026ndash;version	Print version
\u0026ndash;help	Print help
In case of -n [count] != 1, you may press Ctrl-C for graceful termination after current plot is finished, or double press Ctrl-C to terminate immediately.
Example:
./chia_plot -f [insert your public farmer key here] -p [insert your pool key here] -u 128 -k 30 -x 11337 -t /mnt/NVME/Temp/ -2 /mnt/ramdisk/ -d /mnt/NVME/Temp/ -r 6 -K 2 -n 18 How do I make the plotter log into a text file for each plot created? # At the end of the command, add 2\u0026gt;\u0026amp;1 | tee /home/user/desired_path/$(uuid).log;
Example:
./chia_plot -f [insert your public farmer key here] -p [insert your pool key here] -u 128 -k 30 -x 11337 -t /mnt/NVME/Temp/ -2 /mnt/ramdisk/ -d /mnt/NVME/Temp/ -r 6 -K 2 -n 18 2\u0026gt;\u0026amp;1 | tee /home/user/desired_path/(filename).log; What size plots are supported? # For testnet, k26 and higher. For mainnet, k30 plots will be valid for 3 years, k31 plots will be valid for 6 years, while k32 and up have no time restriction.
What are the benefits of plotting and farming higher k sizes? # A single k31 plot has roughly the size of two k30 plots. It is also twice as likely to find a proof. However, as seen above, plotting a higher k size also requires higher allocation of resources (temp space) and longer plotting time. For a small farm with a total number of plots less than 10000, plotting k30 plots is fine. For a large farm, it is better to plot higher k size plot to minimize the look-up time for finding proofs at every block height.
Lookup times of \u0026lt; 1 sec is considered good and \u0026lt; 3 sec is acceptable, whereas anything higher than 5 seconds risk losing block rewards.
Can I use RAMdisk to make plots? # Yes, here is the following size requirements for different k sizes:
Temp1 (GiB)	Temp2 (GiB)	Combined Peak (GiB)	Final Plot size (GiB) k30	55	_27_	\u0026lt; 64	24 k31	110 55	_123_	50 k32	220	_110_	_247_	101 k33	440	249	\u0026lt; 512	209 k34	880	500	\u0026lt; 1024	430 Note: The numbers above are just an approximation.
Can I start making NFT plots now for MMX? # Yes, you can make NFT plots, but you cannot farm them yet. Any NFT plot created now, will not be valid for mainnet, because they will be on a different blockchain and therefore, different contract pool key.
Can I use my GPU to make plots? # YES, in January 2023 Max released Gigahorse GPU plotter:
https://github.com/madMAx43v3r/mmx-binaries/tree/master/mmx-cuda-plotter
VDF Verifications # What kind of GPU is supported for verifying the VDF? What\u0026rsquo;s the minimum required/recommended GPU for VDF verifications? # Nvidia\u0026rsquo;s GT1030 is affordable, power efficient and does VDF verifications in \u0026lt; 2 seconds, while the GTX1650 does it in ~1 second. For best results, devices which support OpenCL 1.2 are recommended. It has been demonstrated that OpenCL 1.1 devices can verify VDFs, but performance is significantly lower than cards even 1 generation newer, and the additional requirement of installing specific drivers to support the older cards can be challenging, depending on the operating system used. For a list of supported GPUs, please see:
https://docs.google.com/spreadsheets/d/1LqyZut0JBwQpbCBnh73fPXkT-1WbCYoXVnIbf6jeyac/
My node is showing VDF verification took longer than recommended: x.xxx sec or [Node] WARN: VDF verification took longer than block interval, unable to keep sync!. What is wrong? # Verification times below 3 sec is good, whereas anything \u0026gt; 5 seconds is bad. If your VDF verification, either done by the CPU or GPU, took more than 5 seconds, then you will get this warning message. Upgrading your CPU or GPU is strongly recommended. To see a list of VDF times from popular GPUs, please see:
https://docs.google.com/spreadsheets/d/1NlK-dq7vCbX4NHzrOloyy4ylLW-fdXjuT8468__SF64/
How do I get OpenCL to do VDF verifications? # https://github.com/madMAx43v3r/mmx-node/wiki/Using-OpenCL-for-VDF-Verification
How do I know if I have installed and set up OpenCL drivers correctly? # Run clinfo in the command line. If it\u0026rsquo;s showing at least 1 platform, it should work properly.
For Windows, download proprietary clinfo utility from:
https://opencl.gpuinfo.org/download.php
I have an Intel/AMD CPU that come with an iGPU and another discrete GPU installed. MMX can use the iGPU to do OpenCL VDF, but not with the discrete GPU. How can I use the discrete GPU to do OpenCL VDF? # First, install the drivers for the discrete GPU. Use clinfo for Linux or for Windows, download clinfo utility here:
https://opencl.gpuinfo.org/download.php
Perform OpenCL hardware diagnostic/info tool and get cl_platform_name
Then run the node with the GPU you want OpenCL to be done with: ./run_node.sh --opencl.platform \u0026quot;name\u0026quot;
For Nvidia, it\u0026rsquo;s \u0026ldquo;NVIDIA CUDA\u0026rdquo;
For AMD, it\u0026rsquo;s \u0026ldquo;AMD Accelerated Parallel Processing\u0026rdquo;
For Intel, it\u0026rsquo;s \u0026ldquo;Intel(R) OpenCL\u0026rdquo;
For a more permanent solution (or in Windows), you can also create a file named platform in ~/config/local/opencl/ and put the platform name in there. Please include the quotes \u0026ldquo;\u0026rdquo;.
If you have an AMD APU and another AMD discrete GPU with the same platform name, you can select which OpenCL device to use: ./run_node.sh --Node.opencl_device 0/1
Or if you have an AMD APU and a mix of discrete AMD/Nvidia GPUs, you can combine the parameters. Example: ./run_node.sh --Node.opencl_device 2 --opencl.platform \u0026quot;NVIDIA CUDA\u0026quot;
If you want to force use your CPU to do VDFs, while having a GPU installed in your computer, you can run this command: ./run_node.sh --Node.opencl_device -1
How do I know if MMX is using my GPU to do VDFs? # Start a node, look for this line:
[Node] INFO: Using OpenCL GPU device [0] GeForce RTX 3070 Ti (total of 1 found)
If you have more than 1 GPU, please select accordingly in file /config/local/Node.json.
I have installed and set up OpenCL drivers correctly, yet MMX only uses my CPU. What is wrong? # VDF verification is done every 10 seconds and only for the latest block height. Syncing still uses the CPU.
Node # Okay I have synced up to the latest blockchain height and I still see high CPU usage and some GPU? # Please check that there are no background processes and you are not running the timelord.
The timelord is taking a huge chunk of my CPU usage, how do I disable it? # You can disable it in GUI settings. (It\u0026rsquo;s disabled by default now)
Alternatively, create a file named timelord (all lower case) in config/local/. Open the file in text editor and type false. Or simply run echo false \u0026gt; config/local/timelord and then restart the node.
For Windows, put the file in C:\\Users\\name\\.mmx\\config\\local\\
Do not edit any files in Program Files
_I tried to run one of the mmx .... commands and I\u0026rsquo;m getting [Proxy] WARN: connect() failed with: 10061 (localhost:11331) error. What\u0026rsquo;s wrong? # Before running a mmx ... command in a new terminal, you need to source ./activate.sh inside the mmx-node directory first, and the node needs to be running (except for mmx wallet create).
Where can I find a list of CLI commands for MMX node? # https://github.com/madMAx43v3r/mmx-node/wiki/CLI-Commands
I left my node running for several hours and when I came back, it\u0026rsquo;s saying that I have forked from the network and there is no way of recovering/syncing to the current height. How can I fix this? # You can revert to a lower height in the GUI settings page now. The height should be about 1000 blocks before the node gets stuck.
Alternatively, run mmx node revert [height] while the node is running.
I copied the block_chain.dat file from another machine and now my node is saying I have forked from the network and there is no way of recovering/syncing to the current height. Or I suspect my database is corrupted. How can I fix this? # Stop the node, then delete the db folder in testnetX and restart the node. Note that this will re-build the database and take some time.
I have tried replay_height and deleting the db folder and my node still won\u0026rsquo;t sync. What do I do? # Stop the node, then delete the testnetX folder and restart node. This will sync from scratch and might take some time.
I\u0026rsquo;ve just started plotting. Can I farm my plotted space right away? How do I add my plots so the harvester reads my plots properly? # Adding plot directories is now possible in the GUI settings page.
Alternatively, open config/local/Harvester.json with a text editor. Follow the syntax below:
{ \u0026quot;reload_interval\u0026quot;: 3600, \u0026quot;farm_virtual_plots\u0026quot;: true, \u0026quot;recursive_search\u0026quot;: false, \u0026quot;plot_dirs\u0026quot;: [ \u0026quot;E:/MMXPlots\u0026quot;, \u0026quot;E:/Test Folder/\u0026quot;, \u0026quot;E:/Folder/Subfolder\u0026quot;, \u0026quot;/mnt/Seagate13/MMXPlots/\u0026quot;, \u0026quot;/mnt/Seagate42/MMXPlots/\u0026quot; ] } You may also put everything on 1 line if it helps you to see all the plot drives/folders:
\u0026quot;plot_dirs\u0026quot;: [\u0026quot;D:/\u0026quot;, \u0026quot;E:/\u0026quot;, \u0026quot;F:/\u0026quot;, \u0026quot;G:/\u0026quot;, \u0026quot;H:/\u0026quot;, \u0026quot;I:/\u0026quot;, \u0026quot;J:/\u0026quot;, \u0026quot;K:/\u0026quot;, \u0026quot;L:/\u0026quot;] Backward slash \u0026ldquo;\\\u0026rdquo; is not supported, so forward slash \u0026ldquo;/\u0026rdquo; must be used. Note that the last entry is not followed by a ,
My node returned [Router] INFO: Broadcasting proof for height 65105 with score 25761. Why did a plot with lower score eventually win that block? # The score is actually an indication of how close your plot has proofs for the challenge. The lower the score, the better the proof is.
Do I need to open some ports to allow MMX to communicate with other peers? # You don\u0026rsquo;t have to. But if you have fast internet connection and feel like helping out the network by allowing incoming connections, you can enable port forwarding on TCP 12338 for testnet8.
UPnP automatic port forwarding is now enabled by default, however it can disabled in GUI settings.
How do I upgrade to a newer testnet? # cd into your ~/mmx-node/ rm NETWORK ./clean_all.sh (optional) ./update.sh My setup is a complicated mix of several computers, where I run a full node on one computer and a few remote harvesters. How do I set them up? # https://github.com/madMAx43v3r/mmx-node/wiki/Remote-Services
Web GUI # How do I access the web GUI? # Since testnet6, WebGUI requires a login. For now, the password is randomly generated and can be accessed from your MMX home directory. In order to access the WebGUI, your node needs to be running (not necessarily synced).
For Windows, it\u0026rsquo;s usually located at C:\\Users\\name\\.mmx\\PASSWD (open with notepad or text editor)
For Linux, it\u0026rsquo;s usually located at ~/mmx-node/PASSWD (cat or nano into the file)
If somehow the password you copied is wrong, you might have to generate a new one. Delete config/local/passwd file, run ./activate.sh again and restart your node.
I\u0026rsquo;ve got some remote farmer/harvester setup all in a LAN. How do I access web GUI to my main node? # Edit the HttpServer.json file in your config/local/ folder (if not already there) and put {\u0026quot;host\u0026quot;: \u0026quot;0.0.0.0\u0026quot;} in it.
Then entering [MMX-node-IP]:11380/gui/ in the URL bar of your browser should work.
For example, 192.168.1.123:11380/gui/
Option #2: https://github.com/madMAx43v3r/mmx-node/wiki/Remote-Services#remote-connections-over-public-networks
Wallet # I start my node and it showed warnings that it cannot find my wallet. How do I create a wallet? # You can create a wallet in the GUI now. Otherwise see below:
Make sure that your wallet file is named wallet.dat and not wallet_xxxxx.dat and that it\u0026rsquo;s placed in the right folder.
For Linux, it\u0026rsquo;s ~/mmx-node/
For Windows, it\u0026rsquo;s C:\\Users\\name\\.mmx\\
If the file does not exist yet, you may create it by running mmx wallet create -f [filename.dat]
If you did not specify a filename, the default name wallet.dat will be used.
If you have to create multiple wallets, be sure to edit your /config/local/Wallet.json file and enter your wallet_name.dat file under \u0026quot;key_files+\u0026quot;: []
mmx wallet create is the only MMX command that does not need the node running in the background.
I lost my wallet.dat file, can I recover it with my 64-character seed hash instead? # Yes. Run mmx wallet create [seed hash]. You might have to cd into the /mmx-node/ folder and run source ./activate.sh
For Windows users, run the command from the shortcut placed in the start menu.
Is it true that the seed hash will be replaced with 24 mnemonic words instead? How can I get them if I had an old wallet created before testnet7? # Yes, once your node properly loads your wallet.dat, you can run mmx wallet get seed to show your 24 mnemonic seed words.
In the future, you can even generate your wallet.dat file with mmx wallet create --mnemonic word1 word2 word3 .....
So I have setup everything right, my farmer is working, my plots are passing the filter. I have a large % of the netspace and I have farmed for days but I haven\u0026rsquo;t won any MMX coins. What\u0026rsquo;s wrong? # Realize that with the same seed hash, your wallet address has changed since testnet7.
If you have set your farming reward sent to a cold wallet, you need to check that you still have proper access to the old wallet, or update the reward address to a new one. You can check your farmer reward address in Farmer.json file in /config/local/.
If you currently have that set to point to null address, it\u0026rsquo;s going to send reward to your default/hot wallet.
Virtual Plots (VP) # What is a Virtual Plot and how does it work? # Virtual Plots allow to further increase efficiency/lower electricity use in crypto-mining. VPs can only get transaction fees (not whole block rewards). Each MMX deposited constitutes 50 GB of equivalent plot size, ie. 1 TB = 20 MMX. Withdrawal is possible but 10% is burned when doing so.
How do I manage my VPs? # Go to WebGUI \u0026gt; Wallet \u0026gt; Plots. It is recommended to keep a single Virtual Plot below 0.1% of the total netspace, otherwise its win chance is reduced.
New VPs are picked up at the next plot reload, to farm a new VP immediately you have to reload your plots. The harvester will then report your virtual plots:
Harvester Loaded 3 (physical) plots, 1 virtual plots, 0.0767306 TB total, 19.94 MMX total, took 2.341 sec
So I have deposited all my MMX into my VP contract. Can I shutdown my node and expect lots of MMX in a year? # No. VPs still need to be farmed like regular plots.
Timelord # I have the fastest CPU in the world. How do I run the timelord and how would I check/know that I am winning timelord rewards? # You can run the node with ./run_node.sh \u0026ndash;timelord 1. Look for a line that says, \u0026ldquo;timelord = \u0026ldquo;true/false.
For a more permanent solution, create a file named timelord in your /config/local/ folder and put \u0026ldquo;true/false\u0026rdquo; in there and nothing else.
You should know if you\u0026rsquo;re the fastest timelord in the network if your terminal/log says , \u0026ldquo;Broadcasting VDF for height XXXXX\u0026hellip;.\u0026rdquo;
Then you\u0026rsquo;ll be randomly rewarded 0.5 MMX (for testnet7) every ~256 blocks.
`}),e.add({id:10,href:"/mmx-node-www/docs/",title:"Docs",description:"Docs Doks.",content:""}),search.addEventListener("input",t,!0);function t(){const s=5;var n=this.value,o=e.search(n,{limit:s,enrich:!0});const t=new Map;for(const e of o.flatMap(e=>e.result)){if(t.has(e.doc.href))continue;t.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),t.size===0&&n){const e=document.createElement("div");e.innerHTML=`No results for "<strong>${n}</strong>"`,e.classList.add("suggestion__no-results"),suggestions.appendChild(e);return}for(const[r,a]of t){const n=document.createElement("div");suggestions.appendChild(n);const e=document.createElement("a");e.href=r,n.appendChild(e);const o=document.createElement("span");o.textContent=a.title,o.classList.add("suggestion__title"),e.appendChild(o);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(n),suggestions.childElementCount==s)break}}})()