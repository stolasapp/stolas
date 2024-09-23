{
  inputs = {
    dream2nix.url = "github:nix-community/dream2nix";
    nixpkgs.follows = "dream2nix";
    flake-utils.url = "github:numtide/flake-utils";
    gitignore = {
      url = "github:hercules-ci/gitignore.nix";
      inputs.nixpkgs.follows = "dream2nix";
    };
  };
  outputs = { self, dream2nix, nixpkgs, flake-utils, gitignore, ... }:
    dream2nix.lib.makeFlakeOutputs {
      systems = flake-utils.lib.defaultSystems;
      config.projectRoot = ./.;
      source = gitignore.lib.gitignoreSource ./.;
    };
}